import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularComponent } from '../component/angular-component/angular-component';

import '../assets/build/mycomponent';

@NgModule({
  declarations: [AppComponent, AngularComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [ModalContentComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
