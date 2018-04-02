import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from "./product";

@Injectable()
export class ProductService{
  
  constructor(private _http: HttpClient)
  {

  }
  
  private _productURL = './api/products/products.json';

  getProducts(): Observable<IProduct[]>{
   return this._http.get<IProduct[]>(this._productURL)
   .do(data => console.log('All: ' + JSON.stringify(data)))
   .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse)
  {
      console.log(err.message);
     return Observable.throw(err.message);
  }
}