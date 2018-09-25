import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { MercadoLibreService } from '../../service/mercado-libre.service';
import { Router } from '@angular/router';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  message: string = '';
  productList: Array<Product> = [];
  productDetails: Product = {
    id: '',
    title: '',
    condition: '',
    available_quantity: 0,
    currency_id: '',
    price: 0,
    original_price: 0,
    state: '',
    thumbnail: '',
    image: '',
    description: ''
  }

  flag: boolean = false;


  constructor(private mercadoService: MercadoLibreService, private route: Router) { }
  @Input()
  criteria: string;

  ngOnChanges(changes: SimpleChanges){
    const name: SimpleChange = changes.criteria;
    this.getProducts();
  }

  ngOnInit() {
    
  }

  private getProducts() {
    this.deleteData();
    this.mercadoService.getProducts(this.criteria).subscribe(result => {      
      let resultList = result.json().results;
      if (resultList.length == 0) {
        this.flag = true;
        this.message = 'Ups!!! No hay resultados para tu busqueda, por favor intenta nuevamente';
        return;
      }
      this.flag =false;
      this.setAtributes(resultList);
    });
  }

  private async setAtributes(list) {
    for (const element of list) {
      let product = new Product();
      let details = await this.getDetailsProduct(element.id);
      let description = (await this.getDescriProduct(element.id, details[1])).toString();
      product.id = element.id;
      product.currency_id = element.currency_id;
      product.available_quantity = element.available_quantity;
      product.price = element.price;
      product.state = element.address.state_name;
      product.condition = element.condition;
      product.original_price = element.original_price;
      product.thumbnail = element.thumbnail;
      product.title = element.title;      
      product.image = details[0];
      product.description = description;
      this.productList.push(product);
    };
  }

  private getDetailsProduct(id) {
    return new Promise(resolve => {
      var details = [];
      return this.mercadoService.getDetailsProduct(id).subscribe(result => {
        details[0] = result.pictures[0].url;
        details[1]=result.descriptions[0].id;
        resolve(details)
      });
    });
  
  }
  private getDescriProduct(id, idDesc) {
    return new Promise(resolve => {
      var description;
      return this.mercadoService.getDescripProduct(id, idDesc).subscribe(result => {
        description = result.plain_text;
        resolve(description)
      });
    });
  }

  private deleteData(){
    this.productList = new Array<Product>();
  }
}
