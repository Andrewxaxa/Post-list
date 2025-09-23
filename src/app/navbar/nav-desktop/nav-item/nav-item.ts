import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { INavRoute } from '../../navbar.config';

@Component({
  selector: 'app-nav-item',
  imports: [RouterModule],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.css',
})
export class NavItem {
  navItem = input.required<INavRoute>();
}
