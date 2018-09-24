import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductListComponent } from './component/product-list/product-list.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes=[
  {path: '', redirectTo: 'search', pathMatch: 'full' },
  {path: 'search', component: SearchComponent},
  {path: 'results_list', component: ProductListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
