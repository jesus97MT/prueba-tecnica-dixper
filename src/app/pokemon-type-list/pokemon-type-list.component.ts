import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-type-list',
  templateUrl: './pokemon-type-list.component.html',
  styleUrls: ['./pokemon-type-list.component.css']
})
export class PokemonTypeListComponent implements OnInit {
  public pokemonTypeList = [];
  
  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.loadPokemonTypes();
  }

  loadPokemonTypes() {
    this.pokemonService.getPokemonTypeList().subscribe(data => this.pokemonTypeList = data['results']);
  }

  selectPokemonType(pokemonType) {
    this.pokemonService.getPokemonTypeData(pokemonType).subscribe(data => console.log(data));
  }



}
