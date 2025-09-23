import { Component, input } from '@angular/core';
import { IPost } from '../interfaces/post.interface';
import { ListItem } from '../list-item/list-item';

@Component({
  selector: 'app-posts-list',
  imports: [ListItem],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css',
})
export class PostsList {
  readonly posts = input.required<IPost[]>();
}
