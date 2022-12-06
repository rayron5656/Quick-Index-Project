import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private subject = new Subject<any>();

  URL: string = "";
  
  constructor() { }
  
  setSearch(data : any) {
    this.subject.next(data);
  }


  
  getSearchObservable() : Observable<any> {
    return this.subject.asObservable();
  }
}
