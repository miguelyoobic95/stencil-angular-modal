import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularComponent } from '../components/angular-component/angular-component';

import '../assets/build/mycomponent';
import { ModalContentComponent } from '../components/modal-content/modal-content.component';

@NgModule({
  declarations: [AppComponent, AngularComponent, ModalContentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
