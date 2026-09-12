import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  styleUrl: './distancia.css',
  templateUrl: './distancia.html',
})
export class Distancia {
  x1:string= '';
  y1:string= '';
  x2:string= '';
  y2:string= '';

  distancia: number = 0;

  calcularDistancia(): void {
    const numX1 = parseFloat(this.x1);
    const numY1 = parseFloat(this.y1);
    const numX2 = parseFloat(this.x2);
    const numY2 = parseFloat(this.y2);

    //Fórmula: d = raíz((x2-x1)^2 + (y2-y1)^2)
    const operacionX = Math.pow(numX2 - numX1, 2);
    const operacionY = Math.pow(numY2 - numY1, 2);

    this.distancia = Math.sqrt(operacionX + operacionY);
  }
}
