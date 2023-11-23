import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class ="title">{{ title }}</div>
    <div class="nav">
      <button type="button" routerLink="/heroes">Heroes</button>
      <button type="button" routerLink="/search">Search</button>
      <button type="button" routerLink="/dashboard">Dashboard</button>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'My Super Tour';
}
