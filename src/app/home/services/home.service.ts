import { Injectable } from '@angular/core';
import { Service } from 'src/app/shared/decorators';
import { InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
        return this.httpClient.get('http://localhost:4200/pdd/tabs');
    }
    getChannels() {
        return this.httpClient.get('http://localhost:4200/pdd/channels')
    }
    getSliders() {
        return this.httpClient.get('http://localhost:4200/pdd/banners');
    }
}