import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-main-list',
  templateUrl: './pokemon-main-list.component.html',
  styleUrls: ['./pokemon-main-list.component.css']
})
export class PokemonMainListComponent implements OnInit {
  public pokemonsTypeList = {};
  public showpokemonsTypeList = [];
  
  constructor(private pokemonService: PokemonService) {
    this.loadPokemons();
    this.pokemonService.pokemonsTypeList.subscribe((data: Array<Object>) => {
      this.showpokemonsTypeList = data;
      console.log(this.showpokemonsTypeList)
    });

  }

  ngOnInit(): void {

  }

  loadPokemons() {
    this.pokemonService.getPokemonsTypeList();
  }

  onSelectPokemon(idPokemon) {
    this.pokemonService.selectPokemon(idPokemon);
  }

  onScroll() {
    this.pokemonService.onScroll();
  }


}
