import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Emoji,Confirmable} from '../../decorators';

export interface Channel {
    id: number;
    icon: string;
    title: string;
    link: string;
}

/**
 * ng-content用途：
 * 1：容器组件
 * 2：动态内容
 * 3：避免组件嵌套层级过多时，属性或事件多级传递
 */
@Component({
    selector: 'horizontal-grid',
    template: `
    <!-- 显示span的content -->
    <!-- <ng-content select="span"></ng-content> -->

    <!--显示包含gridItem指令的content-->
    <ng-content select="[gridItem]"></ng-content>

    <!--显示.special的content-->
    <ng-content select=".special"></ng-content>
    
    <!-- <input type="text" [(ngModel)]="username" />
    <span (click)="handleClick()">你好{{username}}</span>
    {{result}} -->
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

    ngOnInit(): void {}

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
