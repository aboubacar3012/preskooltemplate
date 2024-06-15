import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  { 
    path: '', 
    component: BlogComponent,
    children: [
      { 
        path: 'all-blog', 
        loadChildren: () => import('./all-blog/all-blog.module').then(m => m.AllBlogModule) 
      }, 
        { 
          path: 'add-blog', 
          loadChildren: () => import('./add-blog/add-blog.module').then(m => m.AddBlogModule) 
        }, 
        { path: 'edit-blog', 
        loadChildren: () => import('./edit-blog/edit-blog.module').then(m => m.EditBlogModule)
       },
       { 
        path: 'pending-blog', 
        loadChildren: () => import('./pending-blog/pending-blog.module').then(m => m.PendingBlogModule) 
      }, 
      { 
        path: 'blog-details', 
        loadChildren: () => import('./blog-details/blog-details.module').then(m => m.BlogDetailsModule) 
      },
    ] },
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
