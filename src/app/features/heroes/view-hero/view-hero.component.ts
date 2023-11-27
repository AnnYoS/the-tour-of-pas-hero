import {Component, inject, Signal} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../../core/service/hero.service";
import {Hero} from "../../../core/model/hero";
import { HeroCardComponent } from '../../../shared/components/hero-card/hero-card.component';
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'view-hero',
  standalone: true,
  imports: [HeroCardComponent],
  template:`
    @if (hero()) {
      <div>
        <hero-card [hero]="hero()"></hero-card>
        <button type="button" (click)="save()">Save</button>
        <button type="button" (click)="goBack()">Go Back</button>
      </div>
    }
  `,
  styleUrls: ['./view-hero.component.scss'],
})
export class ViewHeroComponent {
  heroService: HeroService = inject(HeroService)
  location: Location = inject(Location)
  route: ActivatedRoute = inject(ActivatedRoute)

  hero: Signal<Hero> = toSignal(this.heroService.getHero(Number(this.route.snapshot.paramMap.get('id'))), {initialValue: {} as Hero})

  save(): void {
    if (this.hero()) {
      this.heroService.updateHero(this.hero())
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
