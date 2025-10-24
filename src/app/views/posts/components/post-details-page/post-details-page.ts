import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { concatMap, finalize } from 'rxjs';
import { PostDetails } from '../post-details/post-details';
import { PostsService } from '../../services/posts-service';
import { IPost, IPostComment } from '../../interfaces/post.interface';
import { IAuthorDetails } from '../../interfaces/author.interface';
import { PageLoader } from '@UI/page-loader/page-loader';
import { EmptyPage } from '@UI/empty-page/empty-page';

@Component({
  selector: 'app-post-details-page',
  imports: [PageLoader, PostDetails, EmptyPage],
  templateUrl: './post-details-page.html',
  styleUrl: './post-details-page.css',
})
export class PostDetailsPage implements OnInit {
  private postsService = inject(PostsService);
  private destroyRef = inject(DestroyRef);

  readonly id = input('');
  readonly post = signal<IPost | undefined>(undefined);
  readonly author = signal<IAuthorDetails | undefined>(undefined);
  readonly postComments = signal<IPostComment[] | undefined>(undefined);
  readonly postLoading = signal(true);
  readonly authorLoading = signal(true);
  readonly commentsLoading = signal(true);

  ngOnInit(): void {
    this.getPostAndUserDetails();
    this.getPostComments();
  }

  getPostAndUserDetails() {
    if (!this.id()) {
      return;
    }

    this.postLoading.set(true);
    this.authorLoading.set(true);

    this.postsService
      .getPostDetails$(+this.id())
      .pipe(
        concatMap((post) => {
          this.postLoading.set(false);
          this.post.set(post);
          return this.postsService.getAuthorDetails$(post.userId);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((author) => {
        this.authorLoading.set(false);
        this.author.set(author);
      });
  }

  getPostComments() {
    if (!this.id()) {
      return;
    }

    this.commentsLoading.set(true);

    this.postsService
      .getPostComments$(+this.id())
      .pipe(
        finalize(() => {
          this.commentsLoading.set(false);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((postComment) => {
        this.postComments.set(postComment);
      });
  }
}
