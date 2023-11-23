import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../../core/service/hero.service";
import {Hero} from "../../../core/model/hero";
import { HeroCardComponent } from '../../../shared/components/hero-card/hero-card.component';

@Component({
  selector: 'view-hero',
  standalone: true,
  imports: [HeroCardComponent],
  template:`
    <div>
      <hero-card [hero]="hero"></hero-card>
      <button type="button" (click)="save()">Save</button>
      <button type="button" (click)="goBack()">Go Back</button>
    </div>
  `,
  styleUrls: ['./view-hero.component.scss'],
})
export class ViewHeroComponent implements OnInit {

  hero: Hero

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  constructor(private location: Location,
              private route: ActivatedRoute,
              private heroService: HeroService) {
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
