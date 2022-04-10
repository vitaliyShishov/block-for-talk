import { Component, Input, OnInit } from '@angular/core';
import { IPostData } from '../../interfaces/IPostData';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent implements OnInit {
  @Input() postData: IPostData | undefined = undefined;
  propToShow: keyof IPostData = 'id';
  constructor() {}

  ngOnInit(): void {}

  setPropToShow() {
    this.propToShow = this.propToShow === 'id' ? 'userId' : 'id';
  }
}
