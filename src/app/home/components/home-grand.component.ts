import { Component, OnInit } from '@angular/core';

class Product {
    constructor(
        private name: string,
        private color: string
    ){}
}

class PurchaseOrder {
    private product: Product;
    private amount: number;
    constructor(product: Product){
        this.product = product;
    }
}

@Component({
    selector: 'home-grand',
    template: `
        <p>{{obj|json}}</p>
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
    constructor() { }

    ngOnInit(): void {
        this.date = this.minuiDays(new Date(), 2);
        this.price = '123.32';
    }
    minuiDays(date: Date, days: number) {
        const reszult = new Date(date);
        reszult.setDate(reszult.getDate() - days);
        return reszult;
    }
}
