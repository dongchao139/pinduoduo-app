import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'horizontal-grid',
    template: `
    <input type="text" [(ngModel)]="username" />
    <span>你好{{username}}</span>
    `,
    styleUrls: ['horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
    private _username: string = "";

    @Output()
    usernameChange = new EventEmitter();

    constructor() { }

    ngOnInit(): void { }

    public get username(): string {
        return this._username;
    }

    public set username(value: string) {
        this._username = value;
        this.usernameChange.emit(value);
    }
}
