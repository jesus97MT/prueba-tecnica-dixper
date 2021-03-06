import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

import * as _ from "lodash";
import { PokemonData } from '../interfaces/pokemon-data';



@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

  public pokemon:PokemonData;
  public showSidebar:boolean = false;

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.pokemonSelected.subscribe((data: PokemonData) => {
      this.pokemon = data;
      this.showSidebar = !_.isNull(data);
    });
  }

  ngOnInit(): void {
  }

}
