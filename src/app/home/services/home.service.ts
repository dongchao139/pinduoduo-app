import { Injectable } from '@angular/core';
import { Service } from 'src/app/shared/decorators';
import { InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopMenu } from 'src/app/shared/components/tab-bar';
import { Channel } from 'src/app/shared/components/horizontal-grid/horizontal-grid.component';
import { ImageSlider } from 'src/app/shared/components/image-slider';

export const token = new InjectionToken<string>('baseUrl');

@Service({
    name: 'homeService'
})
@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(private httpClient: HttpClient) {}
    getTabs() {
        return this.httpClient.get<TopMenu[]>('http://localhost:4200/pdd/tabs');
    }
    getChannels() {
        return this.httpClient.get<Channel[]>('http://localhost:4200/pdd/channels')
    }
    getSliders() {
        return this.httpClient.get<ImageSlider[]>('http://localhost:4200/pdd/banners');
    }
}