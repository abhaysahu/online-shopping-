import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultProductRoutingModule } from './default-product-routing.module';
import { SharesModule } from '../shares/shares.module';
import { ProductsComponent } from './products/products.component';
import { BannerComponent } from './banner/banner.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { DefaultProductComponent } from './default-product.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ProductsComponent,
    BannerComponent,
    FooterComponent,
    ProductDetailsComponent,
    ProductFilterComponent,
    DefaultProductComponent,

  ],
  imports: [
    CommonModule,
    DefaultProductRoutingModule,
    SharesModule,
    //ProductsModule
  ]
})
export class DefaultProductModule { }
