import { Component, DestroyRef, OnInit, computed, inject, signal } from '@angular/core';
import { distinctUntilChanged, finalize, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PostsSearch } from '../posts-search/posts-search';
import { PostsService } from '../../services/posts-service';
import { IPost } from '../../interfaces/post.interface';
import { PageLoader } from '@UI/page-loader/page-loader';
import { EmptyPage } from '@UI/empty-page/empty-page';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostsList } from '../posts-list/posts-list';

@Component({
  selector: 'app-posts-page',
  imports: [PageLoader, EmptyPage, PostsSearch, PostsList],
  templateUrl: './posts-page.html',
  styleUrl: './posts-page.css',
})
export class PostsPage implements OnInit {
  private postsService = inject(PostsService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  readonly posts = signal<IPost[]>([]);
  readonly filteredPosts = computed(() => this.filterPosts());
  readonly isLoading = signal(true);
  readonly searchQuery = signal('');
  readonly queryParam$ = this.activatedRoute.queryParamMap.pipe(
    map((params: ParamMap) => params.get('query')),
    distinctUntilChanged()
  );
  readonly idParam$ = this.activatedRoute.queryParamMap.pipe(
    map((params: ParamMap) => params.get('id')),
    distinctUntilChanged()
  );

  ngOnInit(): void {
    this.subscribeToIdParam();
    this.subscribeToQueryParam();
  }

  subscribeToIdParam() {
    this.idParam$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((id) => {
      if (!id) {
        this.getPosts();
      } else {
        this.getPosts(+id);
      }
    });
  }

  subscribeToQueryParam() {
    this.queryParam$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((query) => {
      this.searchQuery.set(query || '');
    });
  }

  filterPosts() {
    if (!this.searchQuery()) {
      return this.posts();
    }

    return this.posts().filter(
      (post) =>
        post.title.toLowerCase().includes(this.searchQuery()) ||
        post.body.toLocaleLowerCase().includes(this.searchQuery())
    );
  }

  getPosts(id?: number) {
    this.isLoading.set(true);

    this.postsService
      .getPosts$(id)
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((posts) => {
        this.posts.set(posts);
      });
  }
}
