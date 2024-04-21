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
  public pokemon: any;

  private activatedRoute = inject(ActivatedRoute);

  constructor(private pokemonService: PokemonService, private router: Router, private title: Title) {}

  ngOnInit(): void {
    const pokemonId = this.activatedRoute.snapshot.params['id'];

    this.pokemonService.getPokemonById(pokemonId).subscribe({
      next: res => {
        this.pokemon = res;
      },
      error: err => console.log(err)
    })
  }
}
