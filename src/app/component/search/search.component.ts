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
  criterion:string = '';
  criteria:string = '';
  update: boolean = false;

  constructor(private mercadoService: MercadoLibreService, private router: Router) { }

  ngOnInit() {    
  }

  private searchProducts(){
    this.isSearching = false;
    if(this.criterion === ''){
      alert('Por favor ingrese un criterio de busqueda');
      this.isSearching = false;
      return;
    }
    this.criteria = this.criterion;
    this.isSearching = true;  
  }

}
