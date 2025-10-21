import { Component, input } from '@angular/core';
import { IPostComment } from '../../../interfaces/post.interface';
import { PostCommentsItem } from '../post-comments-item/post-comments-item';

@Component({
  selector: 'app-post-comments',
  imports: [PostCommentsItem],
  templateUrl: './post-comments.html',
  styleUrl: './post-comments.css',
})
export class PostComments {
  readonly postComments = input<IPostComment[] | undefined>();
}
