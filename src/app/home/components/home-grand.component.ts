import { ChangeDetectorRef, Component, Injectable, Injector, NgZone, OnInit } 
from '@angular/core';
import { token } from '../services/home.service';

@Injectable()
class Product {
    constructor(
        private name: string,
        private color: string
    ){}
}

@Injectable()
class PurchaseOrder {
    private product: Product;
    private amount: number;
    constructor(product: Product){
        this.product = product;
    }
}
/**
 * 脏值检测
 * 
 * 什么是脏值检测？
 * 当数据改变时更新视图
 * 
 * 什么时候会触发脏值检测？
 * １：浏览器事件如click,mouseover,keyup等
 * ２：setTimeout()和setInterval()
 * 3: HTTP请求
 * 
 * 无法触发变更检测的情况：
 * １：使用异步方式运行的第三方类库；
 * ２：不可变数据
 * ３：可观察对象
 * 
 * 如何进行脏值检测？
 * 检查两个状态值：当前状态和新状态
 * 
 * 每个组件都有自己的变更检测器，因此变更检测器同样是一颗树。
 * 当一个组件发生变更时，无论它发生在什么位置，都会触发树中的所有变更检测器。
 * Angular会从顶部节点开始，一直扫描到树的叶子节点。
 * 
 * OnPush策略：
 * “傻瓜组件”应该使用OnPush策略　
 * changeDetection: ChangeDetectionStrategy.OnPush
 * 只有组件自己的输入属性发生变化时才执行检测
 * 
 * 变更检测器：
 * private changeDetector: ChangeDetectorRef
 * markForCheck方法告诉Angular已经发生了变化，使变更检测生效
 * 
 *　AfterViewInit和AfterViewChecked 钩子在视图初始化完成之后调用，
 * 不能在这里更改状态值，否则会死循环。
 * Angular会在视图渲染完之后再次检查数据，如果不同，则会提示错误。
 */
@Component({
    selector: 'home-grand',
    template: `
        <h3>{{title}}</h3>
        <p>{{time| date: 'HH:mm:ss'}}</p>
        <h3>{{obj|json}}</h3>
        <p>{{date|appAgo}}</p>
        <p>{{date|date: 'YYYY年MM月DD日'}}</p>
        <p>{{price|currency: 'CNY': 'symbol':'0.0-2'}}</p>
    `,
    styleUrls: ['home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
    obj = {productId: 2, productName: 'xx手机', model: 's',type: '全面屏'}
    date: Date;
    price: string;
    _title: string;
    _time: number;
    purchaseOrder: PurchaseOrder;
    constructor(
        private ngZone: NgZone, 
        private changeDetection: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.date = this.minuiDays(new Date(), 2);
        this.price = '123.32';

        // 注入器
        const injector = Injector.create({
            providers:[{
                provide: Product,
                useFactory:() => {
                    return new Product('大米手机','黑色');
                },
                deps:[]
            },{
                provide: PurchaseOrder,
                useClass: PurchaseOrder,
                deps:[Product]
            },{
                provide:token,
                useValue: 'http://localhost'
            }]
        });
        console.log(injector.get(Product));
        console.log(injector.get(PurchaseOrder));
        console.log(injector.get(token));
    }
    minuiDays(date: Date, days: number) {
        const reszult = new Date(date);
        reszult.setDate(reszult.getDate() - days);
        return reszult;
    }
    public get title():string {
        return this._title;
    }
    public get time(): number {
        // 如果在这里直接返回Date.now()会报错
        return this._time;
    }
    ngAfterViewChecked(): void {
        // 绕过Angular的变更检测
        this.ngZone.runOutsideAngular(()=>{
            setTimeout(()=>{
                this._title = '你好';
                this._time = Date.now();
                console.log('======');
            }, 1000);
        });
        setTimeout(() => {
            this.changeDetection.markForCheck();
        }, 1000);
    }
}
