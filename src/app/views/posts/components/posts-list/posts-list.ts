import { Component, input } from '@angular/core';
import { ListItem } from '../list-item/list-item';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts-list',
  imports: [ListItem],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css',
})
export class PostsList {
  readonly posts = input.required<IPost[]>();
}
