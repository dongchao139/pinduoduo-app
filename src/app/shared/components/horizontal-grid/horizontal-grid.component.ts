import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
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
 * 
 * 缺点：对内容的控制力弱，使用者需要写更多的代码
 * 
 * 避免组件嵌套导致的数据和事件的多级传递：
 *  内容投影（ng-content）
 *  路由
 *  指令
 *  服务
 */
@Component({
    selector: 'horizontal-grid',
    template: `
    <div class="container" [ngStyle]="{'grid-template-rows':templateRows,
    'grid-template-columns':templateColumns}"
    (scroll)="handleScroll($event)"
    >
        <ng-content select="[gridItem]"></ng-content>
    </div>        
    <div class="underline" *ngIf="scrollable">
        <div class="highlight" [ngStyle]="{'margin':sliderMargin}"></div>
    </div>

    <!-- 显示span的content -->
    <!-- <ng-content select="span"></ng-content> -->

    <!--显示包含gridItem指令的content-->
    <!-- <ng-content select="[gridItem]"></ng-content> -->

    <!--显示.special的content-->
    <!-- <ng-content select=".special"></ng-content> -->
    
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

    @Input() cols = 8;
    @Input() displayCols = 5;
    sliderMargin = '0';

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

    public get scrollable(): boolean {
        return this.cols > this.displayCols;
    }

    public get templateRows(): string {
        return `minmax(auto, max-conent)`;
    }

    public get templateColumns(): string {
        return `repeat(${this.cols}, 
            calc( (100vw - ${this.displayCols * 0.4}rem) / ${this.displayCols} )
        )`;
    }

    handleScroll(ev) {
        this.sliderMargin = 
        `0 ${100*ev.target.scrollLeft / ev.target.scrollWidth}%`
    }

    @Confirmable("是否确认执行")
    handleClick() {
        console.log('click 执行');
    }
}
