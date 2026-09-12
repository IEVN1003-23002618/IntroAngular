import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  styleUrl: './operas-bas.css',
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1:string=''
  num2:string=''
  resultado:number=0

  operacion: string = 'sumar'; 

  calcular(): void {
    const n1 = parseInt(this.num1);
    const n2 = parseInt(this.num2);

    switch (this.operacion) {
      case 'sumar':
        this.resultado = n1 + n2;
        break;
      case 'restar':
        this.resultado = n1 - n2;
        break;
      case 'multiplicar':
        this.resultado = n1 * n2;
        break;
      case 'dividir':
        this.resultado = n1 / n2;
        break;
    }
  }


 /* sumar():void{
    this.resultado= parseInt(this.num1)+parseInt(this.num2)
  }
  restar():void{
    this.resultado= parseInt(this.num1)-parseInt(this.num2)
  }
  multiplicar():void{
    this.resultado= parseInt(this.num1)*parseInt(this.num2)
  }
  dividir():void{
    this.resultado= parseInt(this.num1)/parseInt(this.num2)
  }*/
}