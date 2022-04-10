import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPostData } from '../interfaces/IPostData';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private _http: HttpClient) {}

  getBlocks(): Observable<Array<IPostData>> {
    return this._http.get<Array<IPostData>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
