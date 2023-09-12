import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { BmiComponent } from './bmi/bmi.component';
import { TriangleComponent } from './triangle/triangle.component';
import { ProductGrossPriceComponent } from './product-gross-price/product-gross-price.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RectangleComponent,
    NotFoundComponent,
    BmiComponent,
    TriangleComponent,
    ProductGrossPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
