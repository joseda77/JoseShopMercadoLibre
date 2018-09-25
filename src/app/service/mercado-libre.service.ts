import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MercadoLibreService {
  private urlSearch = 'https://api.mercadolibre.com/sites/MCO/';
  private urlProduct = 'https://api.mercadolibre.com/items/';

  constructor(private http: Http) { }

  getProducts(item): Observable<any> {
    return this.http.get(this.urlSearch + 'search?q=' + item).map(response => {
      return response;
    });
  }

  getDetailsProduct(id) {
    return this.http.get(this.urlProduct + id).map(response => {
      return response.json();
    });
  }

  getDescripProduct(id, idDesc) {
    return this.http.get(this.urlProduct + id + '/descriptions/'+idDesc).map(response => {
      return response.json();
    });
  }
}
