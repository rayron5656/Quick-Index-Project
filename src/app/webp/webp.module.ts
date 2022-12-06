import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebpRoutingModule } from './webp-routing.module';
import { WebpComponent } from './webp.component';


@NgModule({
  declarations: [
    WebpComponent
  ],
  imports: [
    CommonModule,
    WebpRoutingModule
  ]
})
export class WebpModule { }
