import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './Component/main/main';

@Component({
  imports: [RouterOutlet, Main],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Centro_de_Idiomas');
}
