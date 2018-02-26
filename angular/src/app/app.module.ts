import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularComponent } from '../components/angular-component/angular-component';

import '../assets/build/mycomponent';
import { ModalContentComponent } from '../components/modal-content/modal-content.component';
import { AngularMounterService } from '../utils/angular-mounter.service';
import { HeroComponent } from '../components/hero-component/hero-component.component';
import { HeroesService } from '../utils/heroes.service';

@NgModule({
  declarations: [AppComponent, AngularComponent, ModalContentComponent, HeroComponent],
  imports: [BrowserModule, FormsModule],
  entryComponents: [ModalContentComponent, HeroComponent],
  providers: [AngularMounterService, HeroesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
