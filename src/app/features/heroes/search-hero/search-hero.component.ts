import {Component, OnInit} from '@angular/core';
import {Hero} from '../../../core/model/hero';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from 'rxjs';
import {HeroService} from '../../../core/service/hero.service';

@Component({
  selector: 'search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss']
  //animations:
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
