import { Component, signal } from '@angular/core';
import { MobileMenuButton } from '../UI/mobile-menu-button/mobile-menu-button';
import { NavDesktop } from './nav-desktop/nav-desktop';
import { NavMobile } from './nav-mobile/nav-mobile';

@Component({
  selector: 'app-navbar',
  imports: [MobileMenuButton, NavDesktop, NavMobile],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isOpen = signal(false);

  onMobileMenuClick() {
    this.isOpen.set(!this.isOpen());
  }

  onMobileClose() {
    this.isOpen.set(false);
  }
}
