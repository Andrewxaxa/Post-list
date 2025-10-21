import { Component, input } from '@angular/core';
import { IPost, IPostComment } from '../../interfaces/post.interface';
import { IAuthorDetails } from '../../interfaces/author.interface';
import { AuthorDetailsPage } from './author-details-page/author-details-page';
import { PostCommentsPage } from './post-comments-page/post-comments-page';

@Component({
  selector: 'app-post-details',
  imports: [AuthorDetailsPage, PostCommentsPage],
  templateUrl: './post-details.html',
  styleUrl: './post-details.css',
})
export class PostDetails {
  readonly post = input.required<IPost>();
  readonly author = input<IAuthorDetails | undefined>();
  readonly postComments = input<IPostComment[] | undefined>();
  readonly authorLoading = input.required<boolean>();
  readonly commentsLoading = input.required<boolean>();
}
