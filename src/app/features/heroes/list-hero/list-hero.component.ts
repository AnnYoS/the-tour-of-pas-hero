import {Component, OnInit} from '@angular/core';
import {Hero} from '../../../core/model/hero';
import {HeroService} from '../../../core/service/hero.service';

@Component({
  selector: 'list-heroes',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.scss']
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
