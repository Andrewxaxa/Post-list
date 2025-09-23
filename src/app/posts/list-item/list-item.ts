import { Component, inject, input } from '@angular/core';
import { IPost } from '../interfaces/post.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  imports: [],
  templateUrl: './list-item.html',
  styleUrl: './list-item.css',
})
export class ListItem {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  readonly post = input.required<IPost>();

  onPostClick(post: IPost): void {
    this.router.navigate([this.post().id], { relativeTo: this.route });
  }
}
