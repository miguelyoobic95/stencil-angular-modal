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

  modalProps;
  visible: boolean = true;

  constructor(
    private r: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private mounter: AngularMounterService
  ) {
    // const factory = this.r.resolveComponentFactory(ModalContentComponent);
    // const component = factory.create(this.injector);

    // this.appRef.attachView(component.hostView);

    // const domElem = (factory.create(this.injector).hostView as EmbeddedViewRef<
    //   any
    // >).rootNodes[0] as HTMLElement;
    // const domElem = this.mounter.transformToHTMLAlt(ModalContentComponent);
    const domElem = this.mounter.mountWithProviders(HeroComponent);
    
    console.log('Dom Elem', domElem);
    this.modalProps = {
      title: 'Hello',
      content: domElem,
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

  openModal() {
    this.modalCtrl.generateModal(this.modalProps);
    this.modalCtrl.show();
  }
}
