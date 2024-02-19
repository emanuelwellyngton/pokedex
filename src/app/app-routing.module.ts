import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Pokedex'},
  {path: 'pokemon/:id', component: PokemonComponent},
  {path: '**', component: PageNotFoundComponent, title: 'Conteúdo não existe'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
