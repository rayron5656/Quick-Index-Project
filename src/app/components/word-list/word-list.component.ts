import { Component, OnInit,Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { Word } from 'src/app/models/word';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit,OnChanges {
    loadMore() {
      this.isLoading = true;
      this.btnText = "Loading...";
    this.loadEmitter.emit(this.words.length);
  }

  btnText = "load more";
  isLoading = false;
  @Output() emitter: EventEmitter<Partial<Word>> = new EventEmitter<Partial<Word>>();
  @Output() loadEmitter : EventEmitter<number> = new EventEmitter<number>();

  setWord(word: Partial<Word>) {
    this.emitter.emit(word);
  }
  
  @Input() words: Partial<Word>[] = [];


  onScroll() {
  }

  constructor() { }
  
  
  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading = false;
    this.btnText = "load more";
    
  }

  ngOnInit(): void {
  }


}
