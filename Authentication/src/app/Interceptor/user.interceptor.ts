import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>,next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    console.log('interceptor Called');
    let token = localStorage.getItem('accessToken');

    const req = request.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    });

    console.log('token Set', req);
    console.log('token ', token);
    return next.handle(req);
  }
}
