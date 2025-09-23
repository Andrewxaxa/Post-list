import { Component } from '@angular/core';
import { Spinner } from '../spinner/spinner';

@Component({
  selector: 'app-page-loader',
  imports: [Spinner],
  templateUrl: './page-loader.html',
  styleUrl: './page-loader.css',
})
export class PageLoader {}
