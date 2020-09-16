import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

import * as _ from "lodash";



@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  public pokemonData = {};
  public showSidebar = false;

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.pokemonSelected.subscribe((data: Object) => {
      this.pokemonData = data;
      if (!_.isEmpty(data)) this.showSidebar = true;
    });
  }

  ngOnInit(): void {
  }

}
