import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-type-list',
  templateUrl: './pokemon-type-list.component.html',
  styleUrls: ['./pokemon-type-list.component.css']
})
export class PokemonTypeListComponent implements OnInit {
  public pokemonTypeList;
  
  constructor(private pokemonService: PokemonService) {
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
    this.pokemonService.changeTypePokemon(pokemonType);
  }

}
