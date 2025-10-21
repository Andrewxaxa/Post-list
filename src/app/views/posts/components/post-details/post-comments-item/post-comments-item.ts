import { Component, input } from '@angular/core';
import { IPostComment } from '../../../interfaces/post.interface';

@Component({
  selector: 'app-post-comments-item',
  imports: [],
  templateUrl: './post-comments-item.html',
  styleUrl: './post-comments-item.css',
})
export class PostCommentsItem {
  readonly postComment = input.required<IPostComment>();
}
