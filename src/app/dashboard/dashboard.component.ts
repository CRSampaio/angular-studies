import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(readonly heroService: HeroService)
  {
    this.heroService.get()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  heroes: Hero[] = [];
}
