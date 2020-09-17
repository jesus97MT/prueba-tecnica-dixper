import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-type-list',
  templateUrl: './pokemon-type-list.component.html',
  styleUrls: ['./pokemon-type-list.component.scss']
})
export class PokemonTypeListComponent implements OnInit {
  public pokemonTypeList;
  public typeSelected;
  
  constructor(private pokemonService: PokemonService) {
    this.typeSelected = this.pokemonService.getTypePokemonSelected();
    this.loadPokemonTypes();
    this.pokemonService.pokemonTypesList.subscribe((data) => {
      this.pokemonTypeList = data;
    });

  }

  ngOnInit(): void {

  }

  loadPokemonTypes() {
    this.pokemonService.getPokemonTypesList();
  }

  onChangePokemonType(pokemonType) {
    this.typeSelected = pokemonType;
    this.pokemonService.changeTypePokemon(pokemonType);
  }

}
