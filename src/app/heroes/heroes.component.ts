import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  constructor(
    private readonly heroService: HeroService,
    private readonly messageService: MessageService
  ) {

  }

  ngOnInit(): void {
    this.heroService.get()
      .subscribe(x => this.heroes = x);
  }

  heroes: Hero[] = [];
}
