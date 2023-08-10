import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-content-display/>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'justice_portfolio_site';
}
