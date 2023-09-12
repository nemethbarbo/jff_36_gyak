import { Component } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent {
  private title: string = "Háromszög szerkeszthetőség";
  private a:number = 1;
  private b:number = 1;
  private c:number = 1;
  
  public get Title() : string {
    return this.title;
  }

  public get A() : number {
    return this.a;
  }
  
  public set A(v: number){
    this.a = v;
  }

  public get B() : number {
    return this.b;
  }
  
  public set B(v: number){
    this.b = v;
  }

  public get C() : number {
    return this.c;
  }
  
  public set C(v: number){
    this.c = v;
  }

  public isDrawAble() : boolean {
    let result = false;
    if (this.a + this.b > this.c && this.b + this.c > this.a && this.a + this.c > this.b){
      result = true;
    } 
    return result;
  }

  public showAlertIsDrawAble():void{
    if (this.isDrawAble()){
      alert("Szerkeszthető a háromszög!");
    }else {
      alert("Nem szerkeszthető!!!");
    }
  }
}
