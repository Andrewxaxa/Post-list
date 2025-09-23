import { Component, input, output } from '@angular/core';
import { NAV_ITEMS } from '../navbar.config';
import { NavMobileItem } from './nav-mobile-item/nav-mobile-item';

@Component({
  selector: 'app-nav-mobile',
  imports: [NavMobileItem],
  templateUrl: './nav-mobile.html',
  styleUrl: './nav-mobile.css',
})
export class NavMobile {
  isOpen = input(false);
  closeClicked = output<void>();

  readonly navItems = NAV_ITEMS;

  closeMenu() {
    this.closeClicked.emit();
  }
}
