import { Component } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { IPostData } from './interfaces/IPostData';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'block-for-talk';
  posts$: Observable<any> = new Observable<Array<IPostData>>();
  errorMessage = '';
  constructor(private postsService: PostsService) {}

  ngAfterViewInit() {
    this.posts$ = this.postsService.posts$.pipe(
      catchError((e) => {
        this.errorMessage = e.message;
        return [];
      })
    );
  }
}
