import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: object = {};
  @Input() idPokemonSelected: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
