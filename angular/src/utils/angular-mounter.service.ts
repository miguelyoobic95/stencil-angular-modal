import { Injectable, InjectionToken, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { HeroesService } from './heroes.service';
import { inject } from '@angular/core/testing';

@Injectable()
export class AngularMounterService {
  

  constructor(private cfr: ComponentFactoryResolver, private injector: Injector, private appRef: ApplicationRef) { }

  HeroesServiceToken = new InjectionToken<any>('HeroesServiceToken');
  
  // transformToHTML(component: any) {
  //   const factory = this.cfr;
  //   const componentFactory = factory.resolveComponentFactory(component);
  //   // const childInjector = Injector.create(getProviders)
  //   const componentRef = componentFactory.
  // }

  transformToHTMLAlt(component: any) {
    const factory = this.cfr.resolveComponentFactory(component);
    const componentToInject = factory.create(this.injector);

    this.appRef.attachView(componentToInject.hostView);

    const domElem = (factory.create(this.injector).hostView as EmbeddedViewRef<
      any
    >).rootNodes[0] as HTMLElement;
    return domElem;
  }

  mountWithProviders(component: any) {
    const factory = this.cfr.resolveComponentFactory(component);
    const providers = {provide: this.HeroesServiceToken, useClass: HeroesService, deps: []};

    const injector = Injector.create([providers]);
    console.log('injector', injector);
    const componentToInject = factory.create(injector, []);

    this.appRef.attachView(componentToInject.hostView);

    const domElem = (factory.create(injector).hostView as EmbeddedViewRef<
      any
    >).rootNodes[0] as HTMLElement;
    return domElem;
  }
}
