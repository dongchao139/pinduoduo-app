import { Component, ViewChild } from '@angular/core';
import { ImageSlider, ImageSliderComponent } from './components/image-slider/image-slider.component';
import {TopMenu} from './components/tab-bar'

@Component({
  selector: 'app-root',
  template: `
  <tab-bar [menus]="topMenus" 
    (onSelect)="handleSelect($event)"
    [backgroundColor]="backgroundColor"
  >
  </tab-bar>
  <image-slider [sliders]="sliders">
  </image-slider>
  <horizontal-grid></horizontal-grid>
  `,
  styles: [``]
})
export class AppComponent {
  topMenus: TopMenu[];
  backgroundColor: string;
  sliders: ImageSlider[];
  title = 'pinduoduo-app';

  @ViewChild(ImageSliderComponent, {static: true})
  imageSlider: ImageSliderComponent;
  
  constructor() {
    this.topMenus = [{
      title: '热门',
      link: ''
    },{
      title: '男装'
    },{
      title: '手机'
    },{
      title: '百货'
    },{
      title: '运动'
    },{
      title: '家纺'
    },{
      title: '食品'
    },{
      title: '电器'
    },{
      title: '鞋包'
    },{
      title: '汽车'
    },{
      title: '水果'
    },{
      title: '电脑'
    },{
      title: '内衣'
    },{
      title: '家装'
    },{
      title: '家具'
    },{
      title: '母婴'
    },{
      title: '美妆'
    }];
    this.backgroundColor = 'white';
    this.sliders = [{
      imgUrl: '//mcdn.pinduoduo.com/home/static/images/boyshirt.jpg',
      link: '',
      caption: ''
    },{
      imgUrl: '//mcdn.pinduoduo.com/home/static/images/girlclothes.jpg',
      link: '',
      caption: ''
    },{
      imgUrl: '//mcdn.pinduoduo.com/home/static/images/banner_index_v2.jpg',
      link: '',
      caption: ''
    }]
  }
  
  handleSelect(menuItem: TopMenu) {
    const colors = ['yellowgreen','skyblue','orangered'];
    const idx = Math.floor(Math.random() * 3);
    this.backgroundColor = colors[idx];
  }

  ngAfterViewInit(): void {
    console.log(this.imageSlider);
  }
}
