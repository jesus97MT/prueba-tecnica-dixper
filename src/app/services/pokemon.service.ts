import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonTypesList$: BehaviorSubject<Array<any>> = new BehaviorSubject(([]));
  public readonly pokemonTypesList: Observable<Array<any>> = this.pokemonTypesList$.asObservable();

  private pokemonsData$: BehaviorSubject<{}> = new BehaviorSubject(({}));
  public readonly pokemonsData: Observable<{}> = this.pokemonsData$.asObservable();

  private pokemonInfo$: BehaviorSubject<Array<any>> = new BehaviorSubject(([]));
  public readonly pokemonInfo: Observable<Array<any>> = this.pokemonInfo$.asObservable();

  private typePokemon = 'normal'; //as default

  constructor(private http: HttpClient) {


  }

  getPokemonTypesList() {
    const url = "https://pokeapi.co/api/v2/type";
    return this.http.get(url).subscribe(data => this.pokemonTypesList$.next(data['results']));
  }

  getPokemonsData() {
    const url = `https://pokeapi.co/api/v2/type/${this.typePokemon}`;
    return this.http.get(url).subscribe(data => this.pokemonsData$.next(data));
  }

  changeTypePokemon(newType) {
    this.typePokemon = newType;
    this.getPokemonsData();
  }
  
}
