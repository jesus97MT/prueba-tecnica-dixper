import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMainListComponent } from './pokemon-main-list.component';

describe('PokemonMainListComponent', () => {
  let component: PokemonMainListComponent;
  let fixture: ComponentFixture<PokemonMainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonMainListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
