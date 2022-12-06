import { AfterViewChecked, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounce, debounceTime } from 'rxjs';
import { FileBasedAnimationConfig } from 'src/app/models/FileBasedAnimationConfig';
import { FileBasedAvatarFiles } from 'src/app/models/FileBasedAvatarFiles';
import { FileMetadata } from 'src/app/models/FileMetadata';
import { Word } from 'src/app/models/word';
import { ClientService } from 'src/app/services/client.service';
import { SearchService } from 'src/app/services/search.service';
import { LinguisticCardComponent } from '../linguistic-card/linguistic-card.component';

@Component({
  selector: 'app-linguistic',
  templateUrl: './linguistic.component.html',
  styleUrls: ['./linguistic.component.css'],
})
export class LinguisticComponent implements OnInit,AfterViewChecked {
  
  
  onSave() {
    
  }
  
  
  loadMoreWords($event: number) {
    this.wordIndex = $event;
    if (this.form.value.search.length > 0) {
      this.clientService.search(this.form.value.search, this.wordIndex).subscribe((words: any) => {
        this.words = words;
        if(this.words.length == this.wordIndex){
          alert("No more words with the same category or definition");
        }
      });
    } else {
      this.clientService.getStagedWordsByIndex(this.wordIndex).subscribe((data: any) => {
        this.words = data;
        if(this.words.length == this.wordIndex){
          alert("No more words");
        }
      });
    }

  }
  
  
  setInitialState(...args: [$event: void]) {
    this.isWord = false;
    this.chosenWord = {};
    this.router.navigate(['/']);
  }


  
  
  setWord($event: Partial<Word>) {
    if(!this.checkIfTouched()){
      let currentUrl = this.searchService.URL;
    
    this.searchService.URL = (
      (
        (
          (
            $event.sign?.animation as FileBasedAnimationConfig
            ).avatars["a289ee5f-9a73-44db-b802-44e1ae596cd1"]as FileBasedAvatarFiles
          ).webp?.['_720x720'] as FileMetadata 
        ).url as string
      );

    let newUrl = this.searchService.URL;
    if(currentUrl != newUrl) { //diffrent url
      if (this.isWord) {
        this.chosenWord = {};
        this.isWord = false;
        this.router.navigate(['/']);
        setTimeout(() => {
          this.chosenWord = $event;
          this.isWord = true;
          this.router.navigate(['/webp']);
        }, 100);
      } else {
        this.isWord = true;
        this.chosenWord = $event;
        this.router.navigate(['/webp']);
      }
    } else{ //same url
      if (this.isWord) { 
        this.isWord = false;
        this.chosenWord = {};
        this.router.navigate(['/']);
      } else {
        this.isWord = true;
        this.chosenWord = $event;
        this.router.navigate(['/webp']);
      }
    }
    } else {
      this.childCard?.callWarning();
    }
  }


  checkIfTouched() {
    return this.childCard?.isTouched()
  }
  
  @ViewChild("ChildCmp") childCard : LinguisticCardComponent | undefined ;

  isWord : boolean = false;
  form: FormGroup;
  words : Partial<Word>[] = [];
  chosenWord : Partial<Word> = {};
  wordIndex : number = 0;

  constructor(private fb : FormBuilder, private clientService : ClientService, private router  : Router,private searchService : SearchService) {
    this.setInitialState();
    
    this.form = this.fb.group({
      search : ['']
    });
    

    this.form.valueChanges.pipe(
      debounceTime(500),
    ).subscribe((data) => {
      if(data.search.length > 0){
        this.clientService.search(data.search,this.wordIndex).subscribe((words : any) => {
          this.words = words;
        });
      } else{
        this.clientService.getStagedWordsByIndex(this.wordIndex).subscribe((data : any) => {
          this.words = data;
        });
      }
    });
  }
  ngAfterViewChecked(): void {
    
  }

  ngOnInit(): void {
    this.clientService.getStagedWordsByIndex(this.wordIndex).subscribe((data : any) => {
      this.words = data;

    });


  }


}
