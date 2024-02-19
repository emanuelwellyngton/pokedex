import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public pokemons: Array<Pokemon> = [];

  public constructor(private pokemonService: PokemonService) {}

  public ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe({
      next: res => {res.data.pokemon_v2_pokemonform.forEach((item: any) => {
        const pokemon: Pokemon = {
          name: item.name.substring(0,1).toUpperCase() + item.name.substring(1),
          id: item.id,
          types: item.pokemon_v2_pokemon.pokemon_v2_pokemontypes,
          stats: null,
          image: item.pokemon_v2_pokemon.pokemon_v2_pokemonsprites[0].sprites
        };
        this.pokemons.push(pokemon);
      })
      console.log(res);},
      error: err => console.log(err)
    })
  }
}
