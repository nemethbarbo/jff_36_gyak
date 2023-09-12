import { Component } from '@angular/core';

@Component({
  selector: 'app-product-gross-price',
  templateUrl: './product-gross-price.component.html',
  styleUrls: ['./product-gross-price.component.css']
})
export class ProductGrossPriceComponent {
  private title: string = "Termék bruttó ár";
  private netPrice: number = 1;
  private vat: number = 1;

  public get Title(): string {
    return this.title;
  }

  public get NetPrice():number {
    return this.netPrice;
  }

  public set NetPrice(v: number){
    this.netPrice = v;
  }

  public get Vat(): number {
    return this.vat;
  }

  public set Vat(v: number){
    this.vat = v;
  }

  public getGrossPrice(): number {
    return this.netPrice+(this.netPrice*(this.vat/100)+1);
  }

  public showAlertGrossPrice(){
    alert("Bruttó ár: "+ this.getGrossPrice() + "Ft")
  }
}
