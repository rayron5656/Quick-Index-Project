import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { Observable } from 'rxjs';
import { Word } from '../models/word';
import { Category } from '../models/category';
import { Filter } from '../models/filter';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  

  data:any[] | NgxCSVParserError = [] = [];

  authTokenHeader = {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}};

  constructor( private _client : HttpClient ) { }
  
  getWordByTerm(term : string){
    return this._client.get('http://localhost:5050/api/v1/word/term/' + term,this.authTokenHeader)
  }


getWordByFilters(filter : Filter){
    return this._client.post('http://localhost:5050/api/v1/word/filter',filter,this.authTokenHeader);
  }

  updateWord(wordId : string , changes : Partial<Word>) : Observable<any>{
    return this._client.patch('http://localhost:5050/api/v1/word/' + wordId, changes,this.authTokenHeader);
  }

  deleteWord(wordId : string){
    return this._client.delete('http://localhost:5050/api/v1/word/' + wordId,this.authTokenHeader);
  }

  addCategory(categoryName : string){
    var category : Category = {name : categoryName};
    return this._client.post('http://localhost:5050/api/v1/word/makeCategory',category ,this.authTokenHeader);
  }
  getAllCategories(){
    this.setToken();
    return this._client.get('http://localhost:5050/api/v1/word/getAllCategories',this.authTokenHeader);
  }
  getAllSpokenLanguages() {
    this.setToken();
    return this._client.get('http://localhost:5050/api/v1/word/getAllSpokenLanguages',this.authTokenHeader);
  }

  getAllSignLanguages() {
    this.setToken();
    return this._client.get('http://localhost:5050/api/v1/word/getAllSignLanguages',this.authTokenHeader);
  }
  getAllWords(){
    this.setToken();
    return this._client.get('http://localhost:5050/api/v1/word/getAllWords',this.authTokenHeader);
  }

  populateDb(data : any){
    return this._client.post('http://localhost:5050/api/v1/word/populateDb/',data,this.authTokenHeader);
  }

  deleteCategory(categoryId : string){
    return this._client.delete('http://localhost:5050/api/v1/category/' + categoryId,this.authTokenHeader);
  }
  private setToken(){
    this.authTokenHeader = {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}};
  }


}
