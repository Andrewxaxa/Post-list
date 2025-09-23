import { Component, input } from '@angular/core';
import { IAuthorDetails } from '../../interfaces/author.interface';

@Component({
  selector: 'app-author-details',
  imports: [],
  templateUrl: './author-details.html',
  styleUrl: './author-details.css',
})
export class AuthorDetails {
  readonly author = input<IAuthorDetails | undefined>();
}
