import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  private title: string = "Testtömegindex számítás";
  private height: number = 1;
  private weight: number = 1;

  public get Title(): string {
    return this.title;
  }

  public set Title(v: string) {
    this.title = v;
  }

  public get Height(): number {
    return this.height;
  }

  public set Height(v: number) {
    this.height = v;
  }

  public get Weight(): number {
    return this.weight;
  }

  public set Weight(v: number) {
    this.weight = v;
  }

  public bmiCalculate(): number {
    return (this.weight / Math.pow((this.height / 100), 2));
  }

  public getBmiCategoryText(): string {
    let bmi: number = this.bmiCalculate();
    let bmiCategoryText: string = "";
    if (bmi < 16) {
      bmiCategoryText = "súlyos soványság";
    } else if (bmi >= 16 && bmi < 17) {
      bmiCategoryText = "mérsékelt soványság";
    } else if (bmi >= 17 && bmi < 18.5) {
      bmiCategoryText = "enyhe soványság";
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiCategoryText = "normál testsúly";
    } else if (bmi >= 25 && bmi < 30) {
      bmiCategoryText = "túlsúlyos";
    } else if (bmi >= 30 && bmi < 35) {
      bmiCategoryText = "I. fokú elhízás";
    } else if (bmi >= 35 && bmi < 40) {
      bmiCategoryText = "II. fokú elhízás";
    }  else if (bmi >= 40) {
      bmiCategoryText = "III. fokú elhízás";
    }
    return bmiCategoryText;
  }

  public showBmiAlert():void{
    let bmi: number = this.bmiCalculate();
    let bmiCategoryText = this.getBmiCategoryText();
    alert("Testtömegindex: "+bmi +", kategória: "+bmiCategoryText);
  }
}
