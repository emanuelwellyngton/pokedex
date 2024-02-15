import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="title-section"><p class="title">Bulbasaur</p></div>
    <div class="card-body">
      <div class="container">
        <p class="tag">Grass</p><p class="tag">Grass</p>
      </div>
    <img src="../../../assets/Pokemon.png" alt="">
    </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {

}
