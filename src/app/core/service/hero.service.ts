import {inject, Injectable} from '@angular/core';
import {Hero} from '../model/hero';
import {catchError, Observable, of, tap} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  httpClient: HttpClient = inject(HttpClient)
  messageService: MessageService = inject(MessageService)

  private heroesUrl = 'api/heroes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('Fetch data')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(
        tap(_ => this.log(`Fetched hero id = ${id}`)),
        catchError(this.handleError<Hero>(`getHero id = ${id}`))
      );
  }

  searchHeroes(search: string): Observable<Hero[]> {
    if (!search.trim()) {
      return of([]);
    }
    return this.httpClient.get<Hero[]>(`${this.heroesUrl}/?name=${search}`)
      .pipe(
        tap(res => res.length ? this.log(`Hero matching "${search}"`) : this.log(`No hero matching "${search}"`)),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap(_ => this.log(`Update hero id = ${ hero.id }`)),
        catchError(this.handleError<Hero>('updateHero'))
      );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((newHero: Hero) => this.log(`Create new hero id=${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  deleteHero(hero: Hero): Observable<Hero> {
    return this.httpClient.delete<Hero>(`${this.heroesUrl}/${hero.id}`)
      .pipe(
        tap(_ => this.log(`Delete hero id=${hero.id}`)),
        catchError(this.handleError<Hero>(`deleteHero id = ${hero.id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${ message }`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error)
      this.log(`${ operation } failed: ${ error.message }`)
      return of(result as T);
    }
  }
}
