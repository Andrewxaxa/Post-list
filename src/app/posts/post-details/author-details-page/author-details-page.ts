import { Component, input } from '@angular/core';
import { IAuthorDetails } from '../../interfaces/author.interface';
import { AuthorDetails } from '../author-details/author-details';
import { Spinner } from '../../../UI/spinner/spinner';

@Component({
  selector: 'app-author-details-page',
  imports: [AuthorDetails, Spinner],
  templateUrl: './author-details-page.html',
  styleUrl: './author-details-page.css',
})
export class AuthorDetailsPage {
  readonly author = input<IAuthorDetails | undefined>();
  readonly authorLoading = input.required<boolean>();
}
