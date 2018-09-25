import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductListComponent } from './component/product-list/product-list.component';
import { SearchComponent } from './component/search/search.component';
import { AboutUsComponent } from './component/about-us/about-us.component';

const routes: Routes=[
  {path: '', redirectTo: 'search', pathMatch: 'full' },
  {path: 'search', component: SearchComponent},
  {path: 'contact', component: AboutUsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
