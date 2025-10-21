import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PostsSearch } from '../posts-search/posts-search';
import { PostsService } from '../../services/posts-service';
import { IPost } from '../../interfaces/post.interface';
import { PageLoader } from '@UI/page-loader/page-loader';
import { EmptyPage } from '@UI/empty-page/empty-page';

@Component({
  selector: 'app-posts-page',
  imports: [PageLoader, EmptyPage, PostsSearch],
  templateUrl: './posts-page.html',
  styleUrl: './posts-page.css',
})
export class PostsPage implements OnInit {
  private postsService = inject(PostsService);
  private destroyRef = inject(DestroyRef);

  readonly posts = signal<IPost[]>([]);
  readonly isLoading = signal(true);

  ngOnInit(): void {
    this.getPosts();
  }

  onUserIdSearchChange(id: number) {
    this.getPosts(id);
  }

  getPosts(id?: number) {
    this.postsService
      .getPosts$(id)
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        })
      )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((posts) => {
        this.posts.set(posts);
      });
  }
}
