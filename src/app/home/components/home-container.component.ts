import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TopMenu} from '../../shared/components/tab-bar'

@Component({
    selector: 'home-container',
    template: `
    <tab-bar [menus]="topMenus" 
        (onSelect)="handleSelect($event)"
        [backgroundColor]="backgroundColor"
    >
    </tab-bar>
    <router-outlet></router-outlet>
    `
})
export class HomeContainerComponent implements OnInit {
    topMenus: TopMenu[];
    backgroundColor: string;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.topMenus = [{
            id: 1,
            title: '热门',
            link: 'hot'
          },{
            id: 2,
            title: '男装',
            link: 'man'
          },{
            id: 3,
            title: '手机',
            link: 'phone'
          },{
            id: 4,
            title: '百货',
            link: 'departnent'
          },{
            id: 5,
            title: '运动',
            link: 'sports'
          },{
            id: 6,
            title: '家纺',
            link: 'closes'
          },{
            id: 7,
            title: '食品',
            link: 'foods'
          },{
            id: 8,
            title: '电器',
            link: 'computer'
          },{
            id: 9,
            title: '鞋包',
            link: 'shoes'
          },{
            id: 10,
            title: '汽车',
            link: 'car'
          },{
            id: 11,
            title: '水果',
            link: 'fruit'
          },{
            id: 12,
            title: '电脑',
            link: 'com'
          },{
            id: 13,
            title: '内衣',
            link: 'clos'
          },{
            id: 14,
            title: '家装',
            link: 'closes'
          },{
            id: 15,
            title: '家具',
            link: 'meterfer'
          },{
            id: 16,
            title: '母婴',
            link: 'milk'
          },{
            id: 17,
            title: '美妆',
            link: 'beauty'
          }];
          this.backgroundColor = 'white';
    }

    handleSelect(menuItem: TopMenu) {
        const colors = ['yellowgreen','skyblue','orangered'];
        const idx = Math.floor(Math.random() * 3);
        this.backgroundColor = colors[idx];
        // 路由导航
        this.router.navigate(['home',menuItem.link]);
    }
}
