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

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log('interceptor Called');
    let token = localStorage.getItem('accessToken');

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('token Set', request);
    console.log('token ', token);
    return next.handle(request);
  }
}
