import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, catchError, throwError } from 'rxjs';
import { IPostData } from '../interfaces/IPostData';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private _http: HttpClient) {}

  posts$: Observable<Array<IPostData>> = this._http
    .get<Array<IPostData>>('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      catchError<any, Observable<Array<IPostData> | unknown>>((e) =>
        throwError(() => new Error(e.message || 'Something went wrong!'))
      ),
      shareReplay(1)
    );
}
