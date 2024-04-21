import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <a *ngIf="pokemon.status" [routerLink]="'pokemon/' + pokemon.status.id">
    <div class="title-section"><p class="title">{{pokemon.name}}</p></div>
      <div class="card-body">
        <div class="container">
          <p *ngFor="let item of pokemon.status.types" class="tag">{{item.type.name}}</p>
        </div>
      <img class="image" [src]="pokemon.status.sprites.other.dream_world.front_default" alt="">
    </div>
  </a>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() public pokemon: any;
}
