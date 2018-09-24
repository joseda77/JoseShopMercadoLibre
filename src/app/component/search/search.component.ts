import { Component, OnInit } from '@angular/core';
import { MercadoLibreService } from '../../service/mercado-libre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  isSearching = false;
  criteria:string = '';

  constructor(private mercadoService: MercadoLibreService, private router: Router) { }

  ngOnInit() {    
  }

  private searchProducts(){
    if(this.criteria === ''){
      alert('Por favor ingrese un criterio de busqueda');
      this.isSearching = false;
      return;
    }
    this.mercadoService.getProducts(this.criteria).subscribe( result => {
      var jsonResult = result.json();
      var productList = jsonResult.results;
      console.log(productList[0]);
    });
    console.log(this.criteria);
    this.isSearching = true;    
  }
}
