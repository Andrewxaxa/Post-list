import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Main } from './main/main';

@Component({
  selector: 'app-root',
  imports: [Navbar, Main],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('proffeo-task');
}
