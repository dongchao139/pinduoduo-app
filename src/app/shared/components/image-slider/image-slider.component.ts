import { Component, ElementRef, Input, OnInit, 
    QueryList, 
    Renderer2, 
    ViewChild, ViewChildren } from '@angular/core';

export interface ImageSlider {
    id: number,
    imgUrl: string;
    link: string;
    caption: string;
}

@Component({
    selector: 'image-slider',
    template: `
    <div class="container" [ngStyle]="{'height':scrollHeight}">
        <div class="image-slider" #imageSlider>
            <img *ngFor="let slider of sliders" #img
             [src]="slider.imgUrl" [alt]="slider.caption" />
        </div>
        <div class="nav-section">
            <span *ngFor="let _ of sliders; let i = index" 
                [ngClass]="{'slide-button-select': i === selectedIndex}"
                class="slide-button"
            ></span>
        </div>
    </div>
    `,
    styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

    @Input() 
    sliders: ImageSlider[];

    @Input()
    intervalSeconds: number = 5000;

    @Input()
    scrollHeight: string = '180px';

    @ViewChild('imageSlider',{static: true})
    imageSlider: ElementRef;

    @ViewChildren('img')
    imgs: QueryList<ElementRef>;

    selectedIndex: number = 0;

    intervalId;

    constructor(private rd2:Renderer2) { }

    ngOnInit(): void {

    }
    ngAfterViewInit(): void {
        this.imgs.forEach(item => {
            this.rd2.setStyle(item.nativeElement,
                'height', '200px');
        });
        let i = 0;
        this.intervalId = setInterval(()=>{
            const scrollWidth = this.imageSlider.nativeElement.scrollWidth;
            const length = this.sliders.length;
            const width = ((++i % length) * scrollWidth) / length;
            this.rd2.setProperty(
                this.imageSlider.nativeElement, 'scrollLeft', width);
            this.selectedIndex = i % length;
        }, this.intervalSeconds);
    }
    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }
}
