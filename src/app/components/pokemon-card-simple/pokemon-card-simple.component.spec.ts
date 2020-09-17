import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardSimpleComponent } from './pokemon-card-simple.component';

describe('PokemonCardSimpleComponent', () => {
  let component: PokemonCardSimpleComponent;
  let fixture: ComponentFixture<PokemonCardSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
