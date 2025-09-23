import { Component, output } from '@angular/core';

@Component({
  selector: 'app-clear-button',
  imports: [],
  templateUrl: './clear-button.html',
  styleUrl: './clear-button.css',
})
export class ClearButton {
  readonly buttonClick = output<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
