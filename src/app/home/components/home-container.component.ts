import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {TopMenu} from '../../shared/components/tab-bar'
import { HomeService, token } from '../services/home.service';

@Component({
    selector: 'home-container',
    template: `
    <tab-bar [menus]="topMenus$ | async" 
        (onSelect)="handleSelect($event)"
        [backgroundColor]="backgroundColor"
    >
    </tab-bar>
    <router-outlet></router-outlet>
    `
})
export class HomeContainerComponent implements OnInit {
    topMenus$: Observable<TopMenu[]>;
    backgroundColor: string;

    constructor(private router: Router,
      private service: HomeService,
      @Inject(token) private baseUrl: string) { }

    ngOnInit(): void {
          this.topMenus$ = this.service.getTabs();
          this.backgroundColor = 'white';
          console.log(this.baseUrl);
    }

    handleSelect(menuItem: TopMenu) {
        const colors = ['yellowgreen','skyblue','orangered'];
        const idx = Math.floor(Math.random() * 3);
        this.backgroundColor = colors[idx];
        // 路由导航
        this.router.navigate(['home',menuItem.link]);
        
        // 路径参数
        // <a [router-link]="['home',menuItem.link,{name:'valkue'}]">...</a>
        // this.router.navigate(['home',menuItem.link,{name:'val1'}]);

        // 查询参数
        // <a [router-link]="['home']" [queryParams]="{name:'value'}">...</a>
        // this.router.navigate(['home',menuItem.link],{queryParams:{name: 'value'}});
    }
}
