import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './component/search/search.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { MercadoLibreService } from './service/mercado-libre.service';
import { AboutUsComponent } from './component/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProductListComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MercadoLibreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
