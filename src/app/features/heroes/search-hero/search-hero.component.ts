import {Component, OnInit} from '@angular/core';
import {Hero} from '../../../core/model/hero';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from 'rxjs';
import {HeroService} from '../../../core/service/hero.service';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'search-hero',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, AsyncPipe],
  template:`
    <div class="search">
      <label for="search-box">Hero Searcher</label>
      <input id="search-box" class="search-input" #searchBox  (input)="search(searchBox.value)" placeholder="Hero name"/>
    </div>
    @if (heroes$) {
      @for (hero of heroes$ | async; track hero.id) {
        <button routerLink="/detail/{{hero.id}}">{{hero.name}}</button>
      }
    }
  `,
  styleUrls: ['./search-hero.component.scss'],
})
export class SearchHeroComponent implements OnInit{

  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>()

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes$ = this.searchTerms
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        switchMap((term: string) => this.heroService.searchHeroes(term))
      );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
