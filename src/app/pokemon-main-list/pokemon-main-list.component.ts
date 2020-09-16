import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-main-list',
  templateUrl: './pokemon-main-list.component.html',
  styleUrls: ['./pokemon-main-list.component.css']
})
export class PokemonMainListComponent implements OnInit {
  public pokemonsData;
  
  constructor(private pokemonService: PokemonService) {
    this.loadPokemons();
    this.pokemonService.pokemonsData.subscribe((data) => {
      this.pokemonsData = data;
    });

  }

  ngOnInit(): void {

  }

  loadPokemons() {
    this.pokemonService.getPokemonsData();
  }

  onSelectPokemon(pokemon) {
    console.log(pokemon)
  }


}
