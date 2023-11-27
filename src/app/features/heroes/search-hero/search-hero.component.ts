import {Component, inject, signal, WritableSignal} from '@angular/core';
import {Hero} from '../../../core/model/hero';
import {debounceTime, distinctUntilChanged, Subject, switchMap} from 'rxjs';
import {HeroService} from '../../../core/service/hero.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'search-hero',
  standalone: true,
  imports: [RouterLink],
  template:`
    <div class="search">
      <label for="search-box">Hero Searcher</label>
      <input id="search-box" class="search-input" #searchBox  (input)="search(searchBox.value)" placeholder="Hero name"/>
    </div>
    @if (heroes()) {
      @for (hero of heroes(); track hero.id) {
        <button routerLink="/detail/{{hero.id}}">{{hero.name}}</button>
      }
    }
  `,
  styleUrls: ['./search-hero.component.scss'],
})
export class SearchHeroComponent {
  heroService: HeroService = inject(HeroService)

  heroes: WritableSignal<Hero[]> = signal([]);
  private searchTerms = new Subject<string>()

  ngOnInit(): void {
    this.searchTerms
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        switchMap((term: string) => this.heroService.searchHeroes(term))
      ).subscribe(heroesList => this.heroes.set(heroesList));
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
