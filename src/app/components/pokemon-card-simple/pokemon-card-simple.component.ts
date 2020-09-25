import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/interfaces/pokemon-data';

@Component({
  selector: 'app-pokemon-card-simple',
  templateUrl: './pokemon-card-simple.component.html',
  styleUrls: ['./pokemon-card-simple.component.scss']
})
export class PokemonCardSimpleComponent implements OnInit {
  @Input() pokemon:PokemonData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
