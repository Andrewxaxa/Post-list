import { Component } from '@angular/core';
import { NavItem } from './nav-item/nav-item';
import { NAV_ITEMS } from '../navbar.config';

@Component({
  selector: 'app-nav-desktop',
  imports: [NavItem],
  templateUrl: './nav-desktop.html',
  styleUrl: './nav-desktop.css',
})
export class NavDesktop {
  readonly navItems = NAV_ITEMS;
}
