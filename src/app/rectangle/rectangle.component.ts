import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})

export class RectangleComponent {
  private a:number = 1;
  private b:number = 1;

  public get A() : number {
    return this.a;
  }
  
  public set A(v : number) {
    this.a = v;
  }
  
  public get B() : number {
    return this.b;
  }
  
  public set B(v : number) {
    this.b = v;
  }
}
