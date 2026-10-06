import { Component, signal } from '@angular/core';
import { Primercomponente } from './components/primercomponente/primercomponente';
import { Tercercomponente } from './components/tercercomponente/tercercomponente';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';

@Component({
  imports: [Primercomponente, Tercercomponente, Main, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Centro_de_idiomas');
}
