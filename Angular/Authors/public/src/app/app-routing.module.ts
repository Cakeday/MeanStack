import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component'
import { NewComponent } from './new/new.component'
import { EditComponent } from './edit/edit.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'new',component: NewComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
