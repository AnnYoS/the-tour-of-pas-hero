import {Component, inject, Signal} from '@angular/core';
import {HeroService} from '../../core/service/hero.service';
import {RouterLink, RouterModule} from '@angular/router';
import {toSignal} from "@angular/core/rxjs-interop";
import {map} from "rxjs";
import {Hero} from "../../core/model/hero";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  template:`
    <h2>Top Heroes</h2>
    <div class="heroes-menu">
      @for (hero of heroes(); track hero.id) {
        <a routerLink="/detail/{{ hero.id }}">{{hero.name}}</a>
      }
    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  heroService: HeroService = inject(HeroService)

  heroes: Signal<Hero[]> = toSignal(this.heroService.getHeroes().pipe(
    map((heroes: Hero[]) => heroes.slice(1, 5))
  ), {initialValue: []})
}
