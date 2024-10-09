import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-block',
  templateUrl: './calculator-block.component.html',
  styleUrl: './calculator-block.component.scss'
})
export class CalculatorBlockComponent {
  currentInput: string = '';

  toInput(value: string): void {
    this.currentInput += value;
  }

  clear(): void {
    this.currentInput = '';
  }

  calculate(): void {
    try {
      this.currentInput = eval(this.currentInput);
    } catch (e) {
      this.currentInput = 'Ошибка';
    }
  }
}
