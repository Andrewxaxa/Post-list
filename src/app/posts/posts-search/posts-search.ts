import { Component, input, linkedSignal } from '@angular/core';
import { IPost } from '../interfaces/post.interface';
import { PostsList } from '../posts-list/posts-list';
import { SearchField } from '../../UI/search-field/search-field';

@Component({
  selector: 'app-posts-search',
  imports: [PostsList, SearchField],
  templateUrl: './posts-search.html',
  styleUrl: './posts-search.css',
})
export class PostsSearch {
  readonly posts = input.required<IPost[]>();
  readonly filteredPosts = linkedSignal(() => this.posts());

  onSearchChanged(value: string) {
    const searchTerm = value.toLowerCase();

    this.filteredPosts.set(
      this.posts().filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.body.toLocaleLowerCase().includes(searchTerm)
      )
    );
  }
}
