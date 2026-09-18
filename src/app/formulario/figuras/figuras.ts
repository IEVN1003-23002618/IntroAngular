import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class FigurasComponent {
  num1: string = ''; // Base o radio
  num2: string = ''; // Altura
  resultado: number = 0;

  figura: string = 'rectangulo'; 

  calcular(): void {
    
    const n1 = parseFloat(this.num1);
    const n2 = parseFloat(this.num2);

    switch (this.figura) {
      case 'cuadrado':
        this.resultado = n1 * n1;
        break;
      case 'rectangulo':
        this.resultado = n1 * n2;
        break;
      case 'triangulo':
        this.resultado = (n1 * n2) / 2;
        break;
      case 'pentagono':
        this.resultado = (n1 * n2) / 2;
        break;
      case 'circulo':
        this.resultado = Math.PI * (n1 * n1);
        break;
    }
  }
}