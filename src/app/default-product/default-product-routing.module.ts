import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DefaultProductComponent } from './default-product.component';

const routes: Routes = [

  { path: '', component: DefaultProductComponent,

  children: [
    {path: '', component: ProductsComponent},
    { path: 'products/details/:id', component: ProductDetailsComponent},
  ]

  } 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultProductRoutingModule { }
