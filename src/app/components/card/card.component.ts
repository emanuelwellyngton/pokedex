import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-card',
  template: `
  <a [routerLink]="'pokemon/' + pokemon?.id">
    <div class="title-section"><p class="title">{{pokemon?.name}}</p></div>
      <div class="card-body">
        <div class="container">
          <p *ngFor="let item of pokemon?.types" class="tag">{{item.pokemon_v2_type.name}}</p>
        </div>
      <img [src]="pokemon?.image" alt="">
    </div>
  </a>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() public pokemon: Pokemon | undefined;
}
