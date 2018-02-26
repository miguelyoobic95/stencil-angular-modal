import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  EmbeddedViewRef,
  ApplicationRef
} from '@angular/core';
import { ModalContentComponent } from '../components/modal-content/modal-content.component';
import { HeroComponent } from '../components/hero-component/hero-component.component';
import { AngularMounterService } from '../utils/angular-mounter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  modalProps1;
  modalProps2;
  visible: boolean = true;

  constructor(
    private r: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private mounter: AngularMounterService
  ) {

    const domElem1 = this.mounter.transformToHTMLAlt(ModalContentComponent);
    const domElem2 = this.mounter.mountWithProviders(HeroComponent);
    
    this.modalProps1 = {
      title: 'Hello',
      content: domElem1,
      hasFooter: true
    };

    this.modalProps2 = {
      title: 'Hello',
      content: domElem2,
      hasFooter: true
    };
  }

  modalCtrl;
  onClick() {
    this.visible = !this.visible;
  }

  ngOnInit() {
    this.modalCtrl = document.querySelector('yoo-modal-controller');
  }

  openModal1() {
    this.modalCtrl.generateModal(this.modalProps1);
    this.modalCtrl.show();
  }

  openModal2() {
    this.modalCtrl.generateModal(this.modalProps2);
    this.modalCtrl.show();
  }
}
