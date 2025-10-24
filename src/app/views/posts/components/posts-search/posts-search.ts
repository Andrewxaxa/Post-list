import { Component, inject, input, signal } from '@angular/core';
import { SearchField } from '@UI/search-field/search-field';
import { IPost } from '../../interfaces/post.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-search',
  imports: [SearchField],
  templateUrl: './posts-search.html',
  styleUrl: './posts-search.css',
})
export class PostsSearch {
  private router = inject(Router);

  readonly posts = input.required<IPost[]>();
  readonly searchQuery = signal('');
  readonly userId = signal('');

  onPostSearchChanged(value: string) {
    this.searchQuery.set(value.toLowerCase());

    this.setUrlParams();
  }

  onUserIdSearchChanged(value: string) {
    if (+value <= 0) {
      this.userId.set('');
    } else {
      this.userId.set(value);
    }

    this.setUrlParams();
  }

  setUrlParams() {
    this.router.navigate(['/posts'], {
      queryParams: {
        query: this.searchQuery(),
        id: this.userId() || '',
      },
    });
  }
}
