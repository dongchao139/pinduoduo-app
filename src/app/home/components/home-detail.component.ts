import { ChangeDetectionStrategy } from '@angular/core';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from '../../shared/components/horizontal-grid/horizontal-grid.component';
import { ImageSlider, ImageSliderComponent } from '../../shared/components/image-slider';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'home-detail',
  template: `
    <div *ngIf="tabLink === 'hot' else others">
      <image-slider [sliders]="sliders"></image-slider>
      <horizontal-grid>
        <span gridItem *ngFor="let item of channels" #span>
            <img [src]="item.icon" alt="" [gridItemImage]="'4rem'"/>
            <span gridItemTitle>{{item.title}}</span>
        </span>
        <div class="special">
            <div [gridItemImage]="'2rem'" style="background-color:orangered"></div>
            <span gridItemTitle>Hello</span>
        </div>
      </horizontal-grid>
    </div>
    <ng-template #others>
        Other works
    </ng-template>
    <!-- <a [routerLink]="['grand']">Link to grand</a> -->
    <!--指定当前的活动链接-->
    <a [routerLink]="[ 'grand' ]" routerLinkActive="active"
      [queryParams]="{name: 'zhangsan'}"
    >
      Link to grand
    </a>
    <router-outlet></router-outlet>

    <!--辅助插座，可以指定多个。和主要插座可以同时存在-->
    <a [routerLink]="{outlets:{second: ['aux']}}">
      Link to aux
    </a>
    <router-outlet name="second"></router-outlet>
    `,
    styles: [`
    .active {
      background-color: orangered;
    },
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit,AfterViewInit {
  sliders: ImageSlider[];
  title = 'pinduoduo-app';
  channels: Channel[];

  @ViewChild(ImageSliderComponent, { static: false })
  imageSlider: ImageSliderComponent;

  tabLink: string;

  constructor(private route: ActivatedRoute, 
    private changeDetection: ChangeDetectorRef,
    private service: HomeService) { }

  ngOnInit(): void {
    this.service.getChannels().subscribe(cns => {
      this.channels = cns;
      this.changeDetection.markForCheck();
    });
    this.service.getSliders().subscribe(slds => {
      this.sliders = slds;
      this.changeDetection.markForCheck();
    });
    // 路径参数 (/:id;k=v;k2=v2)
    this.route.paramMap.subscribe(params => {
      console.log("路径参数：", params);
      this.tabLink = params.get('tabLink');
    });
    // 查询参数（？k=v&k2=v2）
    this.route.queryParamMap.subscribe(params => {
      console.log("查询参数：", params);
    });
  }

  ngAfterViewInit(): void {
    if (this.imageSlider == null) {
      throw new Error('  @ViewChild(\'imageSlider\', { static: true }) 失败');
    }
    console.log(this.imageSlider);
  }
}
