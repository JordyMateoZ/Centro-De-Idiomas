import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tercercomponente } from './tercercomponente';

describe('Tercercomponente', () => {
  let component: Tercercomponente;
  let fixture: ComponentFixture<Tercercomponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tercercomponente],
    }).compileComponents();

    fixture = TestBed.createComponent(Tercercomponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
