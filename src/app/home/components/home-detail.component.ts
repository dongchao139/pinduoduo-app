import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from '../../shared/components/horizontal-grid/horizontal-grid.component';
import { ImageSlider, ImageSliderComponent } from '../../shared/components/image-slider';

@Component({
  selector: 'home-detail',
  template: `
    <div *ngIf="tabLink === 'hot' else others">
      <image-slider [sliders]="sliders">
      </image-slider>
      <horizontal-grid>
        <span gridItem *ngFor="let item of channels">
            <img [src]="item.icon" alt="" [gridItemImage]="'4rem'"/>
            <span gridItemTitle>{{item.title}}</span>
        </span>
        <div class="special">
            <div gridItemImage="2rem" style="background-color:orangered"></div>
            <span gridItemTitle>Hello</span>
        </div>
      </horizontal-grid>
    </div>
    <ng-template #others>
        Other works
    </ng-template>
    `
})
export class HomeDetailComponent implements OnInit {
  sliders: ImageSlider[];
  title = 'pinduoduo-app';
  channels: Channel[];

  @ViewChild(ImageSliderComponent, { static: true })
  imageSlider: ImageSliderComponent;

  tabLink: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sliders = [{
      imgUrl: '//mcdn.pinduoduo.com/home/static/images/boyshirt.jpg',
      link: '',
      caption: ''
    }, {
      imgUrl: '//mcdn.pinduoduo.com/home/static/images/girlclothes.jpg',
      link: '',
      caption: ''
    }, {
      imgUrl: '//mcdn.pinduoduo.com/home/static/images/banner_index_v2.jpg',
      link: '',
      caption: ''
    }];
    this.channels = [{
      id: 1,
      title: '京东超市',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png',
      link: ''
    }, {
      id: 2,
      title: '数码电器',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png',
      link: ''
    }, {
      id: 3,
      title: '京东服饰',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png',
      link: ''
    }, {
      id: 4,
      title: '京东生鲜',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png',
      link: ''
    }, {
      id: 5,
      title: '京东到家',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png',
      link: ''
    }, {
      id: 6,
      title: '充值缴费',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png',
      link: ''
    }, {
      id: 7,
      title: '9.9元拼',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/143365/25/1824/3716/5efbf3c0E5175e1fb/88f6227257a29f1d.png',
      link: ''
    }, {
      id: 8,
      title: '领券',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png',
      link: ''
    }, {
      id: 9,
      title: '领金贴',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/131663/33/3380/3674/5efbf50fEf79cf314/af4b57d2383e605d.png',
      link: ''
    }, {
      id: 8,
      title: 'PLUS会员',
      icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png',
      link: ''
    }];
    // 路径参数 (/:id;k=v;k2=v2)
    this.route.paramMap.subscribe(params => {
      console.log("路径参数：", params);
      this.tabLink = params.get('tabLink');
    });
    // 查询参数（？k=v&k2=v2）
    this.route.queryParamMap.subscribe(params => {
      console.log("查询参数：", params);
    })
  }

  ngAfterViewInit(): void {
    console.log(this.imageSlider);
  }
}
