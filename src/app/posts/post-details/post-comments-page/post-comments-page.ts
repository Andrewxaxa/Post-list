import { Component, input } from '@angular/core';
import { IPostComment } from '../../interfaces/post.interface';
import { PostComments } from '../post-comments/post-comments';
import { Spinner } from '../../../UI/spinner/spinner';

@Component({
  selector: 'app-post-comments-page',
  imports: [PostComments, Spinner],
  templateUrl: './post-comments-page.html',
  styleUrl: './post-comments-page.css',
})
export class PostCommentsPage {
  readonly postComments = input<IPostComment[] | undefined>();
  readonly commentsLoading = input.required<boolean>();
}
