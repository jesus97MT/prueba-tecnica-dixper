import { Component, OnInit } from '@angular/core';
import { PokemonData } from '../interfaces/pokemon-data';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-main-list',
  templateUrl: './pokemon-main-list.component.html',
  styleUrls: ['./pokemon-main-list.component.scss']
})
export class PokemonMainListComponent implements OnInit {
  public showpokemonsTypeList: Array<PokemonData> = [];
  public isLoadingData: boolean = false;
  public idPokemonSelected:number;

  constructor(private pokemonService: PokemonService) {
    this.loadPokemons();
    this.pokemonService.pokemonsTypeList.subscribe((data: Array<PokemonData>) => {
      this.showpokemonsTypeList = data;
      this.isLoadingData = false;
    });

    this.pokemonService.pokemonSelected.subscribe((data: object) => this.idPokemonSelected = data && data['id'] || '');

  }

  ngOnInit(): void {

  }

  loadPokemons(): void {
    this.pokemonService.getPokemonsTypeList();
  }

  onSelectPokemon(idPokemon: number): void {
    this.idPokemonSelected = idPokemon;
    this.pokemonService.selectPokemon(idPokemon);
  }

  onScroll(): void {
    if (!this.isLoadingData) {
      this.pokemonService.onScroll();
      this.isLoadingData = true;
    }
  }

}
