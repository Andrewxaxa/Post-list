import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { PostsService } from '../services/posts-service';
import { IPost } from '../interfaces/post.interface';
import { finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PageLoader } from '../../UI/page-loader/page-loader';
import { EmptyPage } from '../../UI/empty-page/empty-page';
import { PostsSearch } from '../posts-search/posts-search';

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
    this.postsService
      .getPosts$()
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
