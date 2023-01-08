import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWordFormComponent } from './components/add-word-form/add-word-form.component';

import { LinguisticComponent } from './components/linguistic/linguistic.component';
import { LinguisticCardComponent } from './components/linguistic-card/linguistic-card.component';
import { WordListComponent } from './components/word-list/word-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { WordListItemComponent } from './components/word-list-item/word-list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvatarTestingComponent } from './components/avatar-testing/avatar-testing.component';

@NgModule({
  declarations: [
    AppComponent,
    AddWordFormComponent,
    LinguisticComponent,
    LinguisticCardComponent,
    WordListComponent,
    WordListItemComponent,
    AvatarTestingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgbModule,
    InfiniteScrollModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
