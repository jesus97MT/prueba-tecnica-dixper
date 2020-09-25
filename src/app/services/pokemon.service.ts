import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, forkJoin, Subscription } from 'rxjs';

import * as _ from "lodash";
import { PokemonType } from '../interfaces/pokemon-type';
import { PokemonData } from '../interfaces/pokemon-data';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonTypesList$: BehaviorSubject<Array<PokemonType>> = new BehaviorSubject(([]));
  public readonly pokemonTypesList: Observable<Array<PokemonType>> = this.pokemonTypesList$.asObservable();

  private pokemonsTypeList$: BehaviorSubject<Array<PokemonData>> = new BehaviorSubject(([]));
  public readonly pokemonsTypeList: Observable<Array<PokemonData>> = this.pokemonsTypeList$.asObservable();

  private pokemonSelected$: BehaviorSubject<PokemonData> = new BehaviorSubject((null));
  public readonly pokemonSelected: Observable<PokemonData> = this.pokemonSelected$.asObservable();

  private typePokemon: string = 'normal'; //as default

  private allPokemons: Array<Object> = [];

  private skip: number = 6;
  private offset: number = 0;
  private limit: number = 6;

  constructor(private http: HttpClient) {


  }

  getPokemonTypesList(): Subscription {
    const url: string = "https://pokeapi.co/api/v2/type";
    return this.http.get(url).subscribe((data: Object) => this.pokemonTypesList$.next(data['results']));
  }

  getPokemonsTypeList(): Subscription {
    const url: string = `https://pokeapi.co/api/v2/type/${this.typePokemon}`;
    return this.http.get(url).subscribe((data: Object) => {
      this.allPokemons = data['pokemon'];

      this.setPokemonsDataType();
    });
  }

  setPokemonsDataType(): void  {
    const pokemonsToAdd: Array<Object> = this.allPokemons.slice(this.offset, this.skip);
    const requests: Array<Observable<Object>> = pokemonsToAdd.map(pokemon => this.http.get(pokemon['pokemon'].url));

    forkJoin(...requests).subscribe((data: Array<PokemonData>) => {
      let oldData: Array<PokemonData> = this.pokemonsTypeList$.getValue();
      let newData: Array<PokemonData> = oldData && oldData.length ? _.concat(this.pokemonsTypeList$.getValue(), data) : data;

      this.pokemonsTypeList$.next(newData);
    });
  }

  onScroll(): void {
    this.skip += this.limit;
    this.offset += this.limit;
    this.setPokemonsDataType();
  }

  changeTypePokemon(newType: string): void {
    this.typePokemon = newType;
    this.resetData();
    setTimeout(() => this.getPokemonsTypeList(), 2000); //delay de 2 segundos
  }

  resetData(): void {
    this.pokemonsTypeList$.next([]);
    this.pokemonSelected$.next(null);
    this.allPokemons = [];
    this.skip = 6;
    this.offset = 0;
    this.limit = 6;
  }

  selectPokemon(idPokemon: number): void {
    const pokemonDataList: Array<PokemonData> = this.pokemonsTypeList$.getValue();
    const pokemonSelected: PokemonData = pokemonDataList.find((pokemon: PokemonData) => pokemon.id === idPokemon);

    if (pokemonSelected)
      this.pokemonSelected$.next(pokemonSelected);
  }

  getTypePokemonSelected(): string {
    return this.typePokemon;
  }

}
