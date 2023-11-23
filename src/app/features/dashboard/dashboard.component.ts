import {Component, OnInit} from '@angular/core';
import {Hero} from '../../core/model/hero';
import {HeroService} from '../../core/service/hero.service';
import {RouterLink, RouterModule} from '@angular/router';
import {CommonModule, NgFor} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterModule],
  template:`
    <h2>Top Heroes</h2>
    <div class="heroes-menu">
      @for (hero of heroes; track hero.id) {
        <a routerLink="/detail/{{ hero.id }}">{{hero.name}}</a>
      }
    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
