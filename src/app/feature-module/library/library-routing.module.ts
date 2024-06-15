import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LibraryComponent } from "./library.component";
import { LibraryMainComponent } from "./library-main/library-main.component";
import { LibraryAddComponent } from "./library-add/library-add.component";
import { LibraryEditComponent } from "./library-edit/library-edit.component";

const routes: Routes = [
  {
    path: "",
    component: LibraryComponent,
    children: [
      { path: "library-main", component: LibraryMainComponent },
      { path: "library-add", component: LibraryAddComponent },
      { path: "library-edit", component: LibraryEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {}
