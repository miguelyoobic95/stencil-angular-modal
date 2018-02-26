import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class HeroesService {

    constructor() {}

    getObservableHeroes() {
        return Observable.of(['hero', 'hero2', 'hero3']);
    }
    getHeroes() {
        return ['hero', 'hero2', 'hero3'];
    }
}
