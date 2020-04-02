import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { LobbyComponent } from './lobby/lobby.component';
import { RoundComponent } from './round/round.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'lobby', component: LobbyComponent},
  {path: 'round', component: RoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
