import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, concat, forkJoin, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonTypesList$: BehaviorSubject<Array<any>> = new BehaviorSubject(([]));
  public readonly pokemonTypesList: Observable<Array<any>> = this.pokemonTypesList$.asObservable();

  private pokemonsTypeList$: BehaviorSubject<{}> = new BehaviorSubject(({}));
  public readonly pokemonsTypeList: Observable<{}> = this.pokemonsTypeList$.asObservable();

  private pokemonInfo$: BehaviorSubject<Array<any>> = new BehaviorSubject(([]));
  public readonly pokemonInfo: Observable<Array<any>> = this.pokemonInfo$.asObservable();

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

  getPokemonsTypeList() { //cargarmos  los datos de los 6 primeros
    const url = `https://pokeapi.co/api/v2/type/${this.typePokemon}`;
    console.log("daada")
    return this.http.get(url).subscribe(data => {
      this.allPokemons = data['pokemon'];
      this.setPokemonsDataType();
    });
  }

  setPokemonsDataType() { //ToDo comprobar limite si se pasa del length de los pokemons
    const pokemonsToAdd = this.allPokemons.slice(this.offset, this.skip);
    //console.log(pokemonsToAdd);
    let requests = pokemonsToAdd.map(pokemon => this.http.get(pokemon.pokemon.url));
    forkJoin(...requests).subscribe(data => {
      let oldData: any = this.pokemonsTypeList$.getValue();
      
      let newData = oldData && oldData.length ? _.concat(this.pokemonsTypeList$.getValue(), data) : data;
      console.log(newData);
      this.pokemonsTypeList$.next(newData);
    })
    //console.log(requests);
    

    //this.pokemonsTypeList$.next(this.allPokemons.slice(0, this.skip));
  }

  getPokemonData(url) {
      return this.http.get(url).subscribe(data => {
        console.log(data);
      });
  }
  onScroll() {
    this.skip += this.limit;
    this.offset += this.limit;
    this.setPokemonsDataType();
  }

  changeTypePokemon(newType) {
    this.typePokemon = newType;
    this.getPokemonsTypeList();
  }
  
}
