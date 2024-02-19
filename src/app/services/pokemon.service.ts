import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://beta.pokeapi.co/graphql/v1beta';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })};

  constructor(private httpCliente: HttpClient) { }

  public getPokemons(): Observable<any> {
    const body = {
      query: `{ pokemon_v2_pokemonform(limit: 10) { id, name, pokemon_v2_pokemon { pokemon_v2_pokemontypes
        {pokemon_v2_type {name}}, pokemon_v2_pokemonsprites{sprites(path: "front_default")} }}}`
    };
    return this.httpCliente.post<any>(`${this.url}`, body, this.httpOptions).pipe(
      res => res,
      error => error
    )
  }

  public getPokemonById(id: string): Observable<any> {
    const body = {
      query: `{ pokemon_v2_pokemonform(limit: 10, where: {id: {_eq: ${id}}}) { id, name, pokemon_v2_pokemon { pokemon_v2_pokemontypes
        {pokemon_v2_type {name}}, pokemon_v2_pokemonsprites{sprites(path: "front_default")}, pokemon_v2_pokemonstats{base_stat, pokemon_v2_stat{name}} }}}`
    };
    return this.httpCliente.post<any>(`${this.url}`, body, this.httpOptions).pipe(
      res => res,
      error => error
    )
  }
  
}
