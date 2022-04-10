import { Component } from '@angular/core';
import { ApiCallService } from './services/api-call.service';
import { IPostData } from './interfaces/IPostData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Array<IPostData> = [];
  constructor(private apiCallService: ApiCallService) {
    this.getBlocks();
  }
  title = 'block-for-talk';

  getBlocks() {
    this.apiCallService.getBlocks().subscribe((data: Array<IPostData>) => {
      this.posts = data;
    });
  }
}
