import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_ROUTES } from '../../config/api.config';
import { Observable } from 'rxjs';
import { IPost, IPostComment } from '../interfaces/post.interface';
import { IAuthorDetails } from '../interfaces/author.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);

  getPosts$(userId?: number): Observable<IPost[]> {
    let params = new HttpParams();

    if (userId) {
      params = params.set('userId', userId.toString());
    }

    return this.http.get<IPost[]>(API_ROUTES.POSTS, { params });
  }

  getPostDetails$(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${API_ROUTES.POSTS}/${id}`);
  }

  getPostComments$(id: number): Observable<IPostComment[]> {
    return this.http.get<IPostComment[]>(`${API_ROUTES.POSTS}/${id}/comments`);
  }

  getAuthorDetails$(id: number): Observable<IAuthorDetails> {
    return this.http.get<IAuthorDetails>(`${API_ROUTES.USERS}/${id}`);
  }
}
