import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-webp',
  templateUrl: './webp.component.html',
  styleUrls: ['./webp.component.css']
})
export class WebpComponent implements OnInit,OnChanges {
fileURL: string | null;

  constructor(private searchService : SearchService) {
    this.fileURL = searchService.URL;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

}
