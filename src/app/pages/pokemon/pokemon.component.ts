import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  public pokemon: Pokemon | undefined;

  private activatedRoute = inject(ActivatedRoute);

  constructor(private pokemonService: PokemonService, private router: Router, private title: Title) {}

  ngOnInit(): void {
    const pokemonId = this.activatedRoute.snapshot.params['id'];

    // this.pokemonService.getPokemonById(pokemonId).subscribe({
    //   next: res => {
    //     const data = res.data.pokemon_v2_pokemonform[0];
    //     const pokemon: Pokemon = {
    //       id: data.id,
    //       name: data.name.substring(0, 1).toUpperCase() + data.name.substring(1),
    //       image: data.pokemon_v2_pokemon.pokemon_v2_pokemonsprites[0].sprites,
    //       types: null,
    //       stats: data.pokemon_v2_pokemon.pokemon_v2_pokemonstats
    //     };
    //     this.pokemon = pokemon;
    //     this.title.setTitle(pokemon.name + ' | Pokedex');
    //   },
    //   error: err => console.log(err)
    // })
  }
}
