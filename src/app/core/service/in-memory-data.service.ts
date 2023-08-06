import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {Hero} from '../model/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' , description: 'Brice de Nice'},
      { id: 13, name: 'Bombasto' , description: "C'est de la bombe"},
      { id: 14, name: 'Celeritas' , description: 'Le mec est celeste'},
      { id: 15, name: 'Magneta' , description: 'Un aimant'},
      { id: 16, name: 'RubberMan' , description: 'Ca colle'},
      { id: 17, name: 'Dynama' , description: 'La dynamo'},
      { id: 18, name: 'Dr. IQ' , description: '112 de QI'},
      { id: 19, name: 'Magma' , description: 'Le feu ca brûle'},
      { id: 20, name: 'Tornado' , description: 'Chesseur de tornade'}
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
