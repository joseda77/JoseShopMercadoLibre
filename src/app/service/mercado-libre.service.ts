import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MercadoLibreService {
  private url = 'https://api.mercadolibre.com/sites/MLU/';

  constructor(private http: Http) {}

  getProducts(item):Observable<any>{
    return this.http.get(this.url+'search?q='+item).map(response =>{
      return response;
    });
  }
}
