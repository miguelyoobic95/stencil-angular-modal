import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../utils/heroes.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.css'],
  providers: [ HeroesService]
})
export class HeroComponent implements OnInit {

  constructor(private heroService: HeroesService) {
    console.log('constructor hero service', this.heroService);
   }

  heroes: Observable<string[]>;
  stringHeroes: string[];

  ngOnInit() {
    this.heroes = this.heroService.getObservableHeroes();
    this.stringHeroes = this.heroService.getHeroes();
    console.log('service', this.heroService);
  }

}
