import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_ROUTES } from '../../config/api.config';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);

  getPosts$(): Observable<IPost[]> {
    return this.http.get<IPost[]>(API_ROUTES.POSTS);
  }
}
