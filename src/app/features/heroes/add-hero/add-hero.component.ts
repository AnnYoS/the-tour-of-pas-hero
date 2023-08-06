import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HeroService} from '../../../core/service/hero.service';
import {Hero} from '../../../core/model/hero';
import {Location} from '@angular/common';

@Component({
  selector: 'add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent {

  newHero = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private heroService: HeroService,
              private location: Location) {
  }

  onSubmit(): void {
    this.heroService.addHero(this.newHero.value as Hero)
      .subscribe(() => this.location.back());
  }
}
