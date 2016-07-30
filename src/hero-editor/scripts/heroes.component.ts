import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: "appScripts/heroes.component.html",
  styleUrls: ["appScripts/heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private router : Router) {}
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }
  heroes: Hero[];
  selectedHero: Hero
  onSelect(hero : Hero) {
    this.selectedHero = hero;
  }
  gotoDetail(hero: Hero) {
    this.router.navigate(['detail', hero.id]);
  }
}