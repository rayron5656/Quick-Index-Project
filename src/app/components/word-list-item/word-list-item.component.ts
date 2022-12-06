import { Component, Input, OnInit } from '@angular/core';
import { Word } from 'src/app/models/word';

@Component({
  selector: 'app-word-list-item',
  templateUrl: './word-list-item.component.html',
  styleUrls: ['./word-list-item.component.css']
})
export class WordListItemComponent implements OnInit {


  @Input() word: Partial<Word> = {} ;
  @Input() number :number|undefined ;
  constructor() { }

  ngOnInit(): void {
  }

}
