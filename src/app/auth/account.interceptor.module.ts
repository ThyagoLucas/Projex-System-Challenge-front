import { HttpInterceptor, HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { Observable } from "rxjs";
@Injectable()

export class HttpRequestInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token = window.localStorage.getItem('token');

        const dupReq = req.clone({
            headers: req.headers.set('authorization', token? 'Bearer ' + token : ''),
        });

        return next.handle(dupReq);
    }
}

@NgModule({
    providers: [{
        provide:HTTP_INTERCEPTORS,
        useClass:HttpRequestInterceptor,
        multi:true,

    },
],
})

export class Interceptor { }