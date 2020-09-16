import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonTypeListComponent } from './pokemon-type-list/pokemon-type-list.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonMainListComponent } from './pokemon-main-list/pokemon-main-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonTypeListComponent,
    PokemonInfoComponent,
    PokemonMainListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
