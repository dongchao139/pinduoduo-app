import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

export interface ImageSlider {
    imgUrl: string;
    link: string;
    caption: string;
}

@Component({
    selector: 'image-slider',
    template: `
    <div class="container">
        <div class="image-slider" #imageSlider>
            <img *ngFor="let slider of sliders"
             [src]="slider.imgUrl" [alt]="slider.caption" />
        </div>
        <div class="nav-section">
            <span *ngFor="let _ of sliders; let i = index" 
            class="slide-button"></span>
        </div>
    </div>
    `,
    styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

    @Input() 
    sliders: ImageSlider[];

    @ViewChild('imageSlider',{static: true})
    imageSlider: ElementRef;

    constructor() { }

    ngOnInit(): void {
        console.log(this.imageSlider);
    }
}
