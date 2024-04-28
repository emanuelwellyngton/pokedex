import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpCliente: HttpClient) { }

  public getPokemons(): Observable<any> {
    return this.httpCliente.get<any>(this.url).pipe(
      tap(
        res => res.results.map(
          (pokemon: any) => this.getPokemon(pokemon.url).subscribe({
            next: res => pokemon.status = res,
            error: err => console.log(err)
          })
        )
      )
    );
  }

  public getPokemon(url: string): Observable<any> {
    return this.httpCliente.get<any>(url);
  }

  public getPokemonById(id: string): Observable<any> {
    return this.httpCliente.get<any>(`${this.url}/` + id).pipe(
      res => res,
      error => error
    )
  }

  public searchByName(name: string): Observable<any> {
    const body = {
      query: `{ pokemon_v2_pokemonform(limit: 10, where: {name: {_similar: "%${name}%"}}) { id, name, pokemon_v2_pokemon { pokemon_v2_pokemonsprites{sprites(path: "front_default")} }}}`
    };
    return this.httpCliente.post<any>(`${this.url}`, body).pipe(
      res => res,
      error => error
    )
  }
  
}
