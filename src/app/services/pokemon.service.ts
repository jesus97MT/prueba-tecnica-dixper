import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, forkJoin } from 'rxjs';

import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonTypesList$: BehaviorSubject<Array<any>> = new BehaviorSubject(([]));
  public readonly pokemonTypesList: Observable<Array<any>> = this.pokemonTypesList$.asObservable();

  private pokemonsTypeList$: BehaviorSubject<Array<any>> = new BehaviorSubject(([]));
  public readonly pokemonsTypeList: Observable<Array<any>> = this.pokemonsTypeList$.asObservable();

  private pokemonSelected$: BehaviorSubject<{}> = new BehaviorSubject(({}));
  public readonly pokemonSelected: Observable<{}> = this.pokemonSelected$.asObservable();

  private typePokemon = 'normal'; //as default

  private allPokemons = [];

  private skip = 6;
  private offset = 0;
  private limit = 6;

  constructor(private http: HttpClient) {


  }

  getPokemonTypesList() {
    const url = "https://pokeapi.co/api/v2/type";
    return this.http.get(url).subscribe(data => this.pokemonTypesList$.next(data['results']));
  }

  getPokemonsTypeList() {
    const url = `https://pokeapi.co/api/v2/type/${this.typePokemon}`;
    return this.http.get(url).subscribe(data => {
      this.allPokemons = data['pokemon'];

      this.setPokemonsDataType();
    });
  }

  setPokemonsDataType() {
    const pokemonsToAdd = this.allPokemons.slice(this.offset, this.skip);
    const requests = pokemonsToAdd.map(pokemon => this.http.get(pokemon.pokemon.url));

    forkJoin(...requests).subscribe(data => {
      let oldData: any = this.pokemonsTypeList$.getValue();
      let newData = oldData && oldData.length ? _.concat(this.pokemonsTypeList$.getValue(), data) : data;

      this.pokemonsTypeList$.next(newData);
    });
  }

  onScroll() {
    this.skip += this.limit;
    this.offset += this.limit;
    this.setPokemonsDataType();
  }

  changeTypePokemon(newType) {
    this.typePokemon = newType;
    this.resetData();
    setTimeout(() => this.getPokemonsTypeList(), 2000);
  }

  resetData() {
    this.pokemonsTypeList$.next([]);
    this.pokemonSelected$.next({});
    this.allPokemons = [];
    this.skip = 6;
    this.offset = 0;
    this.limit = 6;
  }

  selectPokemon(idPokemon) {
    const pokemonDataList = this.pokemonsTypeList$.getValue();
    const pokemonSelected = pokemonDataList.find(pokemon => pokemon.id === idPokemon);

    if (pokemonSelected)
      this.pokemonSelected$.next(pokemonSelected);
  }

  getTypePokemonSelected() {
    return this.typePokemon;
  }

}
