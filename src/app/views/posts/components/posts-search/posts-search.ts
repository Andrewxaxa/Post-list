import { Component, input, linkedSignal, output } from '@angular/core';
import { PostsList } from '../posts-list/posts-list';
import { SearchField } from '@UI/search-field/search-field';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts-search',
  imports: [PostsList, SearchField],
  templateUrl: './posts-search.html',
  styleUrl: './posts-search.css',
})
export class PostsSearch {
  readonly posts = input.required<IPost[]>();
  readonly filteredPosts = linkedSignal(() => this.posts());
  readonly userIdSearchChange = output<number>();

  onPostSearchChanged(value: string) {
    const searchTerm = value.toLowerCase();

    this.filteredPosts.set(
      this.posts().filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.body.toLocaleLowerCase().includes(searchTerm)
      )
    );
  }

  onUserSearchChanged(value: string) {
    this.userIdSearchChange.emit(+value);
  }
}
