import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { BmiComponent } from './bmi/bmi.component';
import { ProductGrossPriceComponent } from './product-gross-price/product-gross-price.component';
import { TriangleComponent } from './triangle/triangle.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rectangle', component: RectangleComponent },
  { path: 'bmi', component: BmiComponent},
  { path: 'productGrossPrice', component: ProductGrossPriceComponent},
  { path: 'triangle', component: TriangleComponent},
  { path: 'notfound', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
