import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public pokemons: Array<any> = [];

  public constructor(private pokemonService: PokemonService) {}

  public ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe({
      next: res => {
        this.pokemons = res.results;
      },
      error: err => console.log(err)
    });
  }

  // public search(name: string) {
  //   this.pokemonService.searchByName(name).subscribe({
  //     next: res => console.log(res),
  //     error: err => console.log(err)
  //   });
  // }
}
