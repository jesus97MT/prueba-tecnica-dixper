import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/interfaces/pokemon-data';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: PokemonData;
  @Input() idPokemonSelected: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
