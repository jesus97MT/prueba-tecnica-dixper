import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.scss']
})
export class PokemonStatsComponent implements OnInit {
  @Input() pokemon: object = {};
  
  constructor() { }

  ngOnInit(): void {
  }

}
