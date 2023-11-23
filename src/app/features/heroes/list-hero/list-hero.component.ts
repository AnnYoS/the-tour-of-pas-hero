import {Component, OnInit} from '@angular/core';
import {Hero} from '../../../core/model/hero';
import {HeroService} from '../../../core/service/hero.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'list-heroes',
  standalone: true,
  imports: [NgFor, RouterLink] ,
  template:`
    <ul class="heroes">
      @for (hero of heroes; track hero.id) {
        <li>
          <a class="hero-cell" routerLink="/detail/{{ hero.id }}">
            <span class="badge">{{ hero.id }}</span>
            <span class="name">{{ hero.name }}</span>
          </a>
          <button type="button" class="delete" (click)="deleteHero(hero)">x</button>
        </li>
      }
    </ul>
    <div>
      <button type="button" routerLink="/newHero">Create Hero</button>
    </div>
  `,
  styleUrls: ['./list-hero.component.scss'],
})
export class ListHeroComponent implements OnInit {
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) { }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
