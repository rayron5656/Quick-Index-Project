import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Word } from '../models/word';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  

  
  serverUrl = 'http://localhost:5050';
  filesUrl = "http://localhost:5050/api/v1/files";
  wordsUrl = "http://localhost:5050/api/v1/word";

  constructor(
    private http: HttpClient
  ) { }



  addWord(newWord: Word) {
    return this.http.post(this.wordsUrl, newWord);
  }

  uploadFileToTesting(formData: FormData) {
    return this.http.post(this.filesUrl + '/testing', formData);
  }

  downloadFileUS(url: any) {
    return this.http.get(this.filesUrl + '/downloadUS/', {
      responseType: 'blob',
      params: {
        url: url
      }
    });
  }

  getWordByTitle(title: string) {
    return this.http.get(this.wordsUrl + '/title/' + title);
  }


  uploadFile(formData: any | null) {
    return this.http.post(this.filesUrl, formData);
  }
  uploadFileToProd(formData: any | null) {
    return this.http.post(this.filesUrl+"/prod", formData);
  }
  uploadFileToStaged(formData: any | null) {
    return this.http.post(this.filesUrl+"/staged", formData);
  }

  getStagedWordsByIndex(index : number) {
    return this.http.get(this.wordsUrl+"/staged", {
      params: {
        index: index.toString()
      }});
  }



  getWordByTerm(term : string){
    return this.http.get('http://localhost:5050/api/v1/word/search/' + term)
  }
  
  updateWord(word: Partial<Word>) {
    return this.http.put(this.wordsUrl+ "/update", word);
  }
  getAllWords() {
    return this.http.get(this.wordsUrl);
  }

  search(search: any,index : number) {
    return this.http.get(this.wordsUrl + '/search/' + search, {params : {
      index : index.toString()
    }});
  }
}
