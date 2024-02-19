import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header>
    <img class="simbol" src="../../../assets/Logo.png" alt="Imagem de uma Pokebola">
    <a href=""><h1 class="logotype">Pokedex</h1></a>
  </header>
  <router-outlet></router-outlet>`
  ,
  styles: [`
    header {
    display: flex;
    justify-content: center;
    padding: 15px;
    align-items: center;
    gap: 10px;
  }

  .logotype {
      color: var(--secundary-txt-color);
      font-size: 32px;
      line-height: 37.5px;
      font-style: italic;
      font-weight: 900;
  }

  .simbol {
      height: 35px;
  }

  .cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
  }
  `]
})
export class AppComponent {
  title = 'pokedex';
}
