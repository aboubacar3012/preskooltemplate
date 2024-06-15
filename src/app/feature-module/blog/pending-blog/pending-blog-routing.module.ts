import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingBlogComponent } from './pending-blog.component';

const routes: Routes = [{ path: '', component: PendingBlogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingBlogRoutingModule { }
