import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class CalculadoraImcPage {
  altura: number | undefined;
  peso: number | undefined;
  resultado: number | undefined;

  calcularIMC() {
    if (this.altura && this.peso) {
      this.resultado = this.peso / ((this.altura / 100) * (this.altura / 100));
    }
  }

  interpretarIMC(imc: number): string {
    if (imc < 18.5) {
      return 'Magreza';
    } else if (imc < 24.9) {
      return 'Normal';
    } else if (imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc < 39.9) {
      return 'Obesidade';
    } else {
      return 'Obesidade Grave';
    }
  }
}
