import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { PokemonTypeListComponent } from './pokemon-type-list/pokemon-type-list.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonMainListComponent } from './pokemon-main-list/pokemon-main-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonCardSimpleComponent } from './components/pokemon-card-simple/pokemon-card-simple.component';
import { PokemonStatsComponent } from './components/pokemon-stats/pokemon-stats.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonTypeListComponent,
    PokemonInfoComponent,
    PokemonMainListComponent,
    PokemonCardComponent,
    PokemonCardSimpleComponent,
    PokemonStatsComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
