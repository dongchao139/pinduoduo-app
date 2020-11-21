import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ParamInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const mReq = req.clone({
            setParams: {icode: 'abcdefxxxyyy111222'}
        });
        return next.handle(mReq);
    }
}