import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-grand',
    template: `
        <h2>Home Grand Component</h2>
    `,
    styleUrls: ['home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
