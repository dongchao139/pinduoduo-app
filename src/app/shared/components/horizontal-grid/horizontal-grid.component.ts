import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Emoji,Confirmable} from '../../decorators';

@Component({
    selector: 'horizontal-grid',
    template: `
    <input type="text" [(ngModel)]="username" />
    <span (click)="handleClick()">你好{{username}}</span>
    {{result}}
    `,
    styleUrls: ['horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
    private _username: string = "";

    @Output()
    usernameChange = new EventEmitter();

    @Emoji()
    result: string = "Hello"

    constructor() { }

    ngOnInit(): void { }

    public get username(): string {
        return this._username;
    }

    public set username(value: string) {
        this._username = value;
        this.usernameChange.emit(value);
    }

    @Confirmable("是否确认执行")
    handleClick() {
        console.log('click 执行');
    }
}
