import { Component, OnInit } from '@angular/core';
import { PokemonType } from '../interfaces/pokemon-type';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-type-list',
  templateUrl: './pokemon-type-list.component.html',
  styleUrls: ['./pokemon-type-list.component.scss']
})
export class PokemonTypeListComponent implements OnInit {
  public pokemonTypeList: Array<PokemonType>;
  public typeSelected: string;
  
  constructor(private pokemonService: PokemonService) {
    this.typeSelected = this.pokemonService.getTypePokemonSelected();
    this.loadPokemonTypes();
    this.pokemonService.pokemonTypesList.subscribe((data: Array<PokemonType>) => {
      this.pokemonTypeList = data;
    });

  }

  ngOnInit(): void {

  }

  loadPokemonTypes(): void {
    this.pokemonService.getPokemonTypesList();
  }

  onChangePokemonType(pokemonType: string): void {
    this.typeSelected = pokemonType;
    this.pokemonService.changeTypePokemon(pokemonType);
  }

}
