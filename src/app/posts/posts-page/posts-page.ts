import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { PostsService } from '../services/posts-service';
import { IPost } from '../interfaces/post.interface';
import { finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-posts-page',
  imports: [],
  templateUrl: './posts-page.html',
  styleUrl: './posts-page.css',
})
export class PostsPage implements OnInit {
  private postsService = inject(PostsService);
  private destroyRef = inject(DestroyRef);
  readonly posts = signal<IPost[]>([]);
  readonly isLoading = signal(false);

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
