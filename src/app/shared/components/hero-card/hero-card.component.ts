import {Component, Input} from '@angular/core';
import {Hero} from '../../../core/model/hero';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MyUppercasePipe} from "../../pipes/my-uppercase-pipe";

@Component({
  selector: 'hero-card',
  standalone: true,
  imports: [CommonModule, FormsModule, MyUppercasePipe],
  template: `
    @if (hero) {
      <div>
        <h2>{{ hero.name | myUpper }} Details</h2>
        <div>
          <span>id: </span> {{ hero.id }}
        </div>
        <div>
          <label for="name">Hero name:</label>
          <input id="name" [(ngModel)]="hero.name" placeholder="name">
        </div>
        <div>
          <label for="description">Hero description:</label>
          <input id="description" [(ngModel)]="hero.description" placeholder="description">
        </div>
      </div>
    }
  `,
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent {

  @Input() hero: Hero;
}
