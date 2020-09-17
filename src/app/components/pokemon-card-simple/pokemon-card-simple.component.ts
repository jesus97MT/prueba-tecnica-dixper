import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card-simple',
  templateUrl: './pokemon-card-simple.component.html',
  styleUrls: ['./pokemon-card-simple.component.scss']
})
export class PokemonCardSimpleComponent implements OnInit {
  @Input() pokemon: object = {};
  
  constructor() { }

  ngOnInit(): void {
  }

}
