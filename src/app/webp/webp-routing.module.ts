import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebpComponent } from './webp.component';

const routes: Routes = [{ path: '', component: WebpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebpRoutingModule { }
