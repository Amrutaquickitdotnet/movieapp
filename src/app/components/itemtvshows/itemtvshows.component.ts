import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { ItemTvShows } from './itemtvshows';

@Component({
  selector: 'app-itemtvshows',
  templateUrl: './itemtvshows.component.html',
  styleUrls: ['./itemtvshows.component.scss']
})
export class ItemtvshowsComponent implements OnInit {
  @Input() itemData: ItemTvShows | null = null;
 

  imagesSizes = IMAGES_SIZES;

  constructor() { }

  ngOnInit(): void {
  }

}
