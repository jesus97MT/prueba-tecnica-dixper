import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypeListComponent } from './pokemon-type-list.component';

describe('PokemonTypeListComponent', () => {
  let component: PokemonTypeListComponent;
  let fixture: ComponentFixture<PokemonTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
