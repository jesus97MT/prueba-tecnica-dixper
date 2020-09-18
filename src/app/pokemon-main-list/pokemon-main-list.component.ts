import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-main-list',
  templateUrl: './pokemon-main-list.component.html',
  styleUrls: ['./pokemon-main-list.component.scss']
})
export class PokemonMainListComponent implements OnInit {
  public pokemonsTypeList = {};
  public showpokemonsTypeList = [];
  public isLoadingData = false;
  public idPokemonSelected = '';

  constructor(private pokemonService: PokemonService) {
    this.loadPokemons();
    this.pokemonService.pokemonsTypeList.subscribe((data: Array<Object>) => {
      this.showpokemonsTypeList = data;
      this.isLoadingData = false;
    });

    this.pokemonService.pokemonSelected.subscribe((data: object) => this.idPokemonSelected = data && data['id'] || '');

  }

  ngOnInit(): void {

  }

  loadPokemons() {
    this.pokemonService.getPokemonsTypeList();
  }

  onSelectPokemon(idPokemon) {
    this.idPokemonSelected = idPokemon;
    this.pokemonService.selectPokemon(idPokemon);
  }

  onScroll() {
    if (!this.isLoadingData) {
      this.pokemonService.onScroll();
      this.isLoadingData = true;
    }
  }

}
