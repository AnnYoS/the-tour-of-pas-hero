import {Component, inject} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HeroService} from '../../../core/service/hero.service';
import {Hero} from '../../../core/model/hero';
import {Location} from '@angular/common';

@Component({
  selector: 'add-hero',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  template:`
    <h3>Add hero</h3>
    <div>
      <form [formGroup]="newHero" (ngSubmit)="onSubmit()">
        <label for="name">New hero name</label>
        <input id="name" type="text" formControlName="name"><br>

        <label for="description">Description</label>
        <input id="description" type="text" formControlName="description"><br>

        <button type="submit" [disabled]="!newHero.valid">Create</button>
      </form>
    </div>
  `,
  styleUrls: ['./add-hero.component.scss'],

})
export class AddHeroComponent {
  heroService: HeroService = inject(HeroService)
  location: Location = inject(Location)

  newHero = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  onSubmit(): void {
    this.heroService.addHero(this.newHero.value as Hero)
      .subscribe(() => this.location.back());
  }
}
