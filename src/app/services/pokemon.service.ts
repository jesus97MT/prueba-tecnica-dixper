import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {


  }

  getPokemonTypeList() {
    const url = "https://pokeapi.co/api/v2/type";
    return this.http.get(url);
  }

  getPokemonTypeData(pokemonType) {
    const url = `https://pokeapi.co/api/v2/type/${pokemonType}`;
    return this.http.get(url);
  }
  
}
