import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[gridItem]',
})
export class GridItemDirective {
    @HostBinding('style.display') display = 'grid';
    @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
    @HostBinding('style.place-items') placeItems = `center`;
    @HostBinding('style.width') width = '4rem';
}

@Directive({
    selector: '[gridItemImage]',
})
export class GridItemImageDirective implements OnInit {
    @Input() 
    @HostBinding('style.width')
    @HostBinding('style.height')
    gridItemImage: string = "2rem";

    constructor(private elr: ElementRef, private rd2: Renderer2) {}
    ngOnInit(): void {
        this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image');
        // this.rd2.setStyle(this.elr.nativeElement, 'width', this.gridItemImage);
        // this.rd2.setStyle(this.elr.nativeElement, 'height', this.gridItemImage);
        this.rd2.setStyle(this.elr.nativeElement, 'object-fit', 'cover');
    }

    @HostListener('click', ['$event.target'])
    handleListener(ev) {
        console.log(ev);
    }
}

@Directive({
    selector: '[gridItemTitle]',
})
export class GridItemTitleDirective implements OnInit {
    constructor(private elr: ElementRef, private rd2: Renderer2) {}
    ngOnInit(): void {
        this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title');
    }
}