import { Component, input } from '@angular/core';
import { IPost } from '../interfaces/post.interface';

@Component({
  selector: 'app-posts-list',
  imports: [],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css',
})
export class PostsList {
  readonly posts = input.required<IPost[]>();
}
