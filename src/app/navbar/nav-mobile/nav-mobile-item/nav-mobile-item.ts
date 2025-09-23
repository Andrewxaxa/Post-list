import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { INavRoute } from '../../navbar.config';

@Component({
  selector: 'app-nav-mobile-item',
  imports: [RouterModule],
  templateUrl: './nav-mobile-item.html',
  styleUrl: './nav-mobile-item.css',
})
export class NavMobileItem {
  closeClicked = output<void>();

  navItem = input.required<INavRoute>();

  closeMenu() {
    this.closeClicked.emit();
  }
}
