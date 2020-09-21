import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

import * as _ from "lodash";



@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

  public pokemon:object = {};
  public showSidebar:boolean = false;

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.pokemonSelected.subscribe((data: object) => {
      this.pokemon = data;
      this.showSidebar = !_.isEmpty(data);
    });
  }

  ngOnInit(): void {
  }

}
