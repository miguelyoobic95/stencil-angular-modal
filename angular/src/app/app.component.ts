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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible: boolean = true;

  @ViewChild('parent', { read: ViewContainerRef })
  parent: ViewContainerRef;

  modalProps;
  modalCtrl;
  constructor(
    private r: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {
    const factory = this.r.resolveComponentFactory(ModalContentComponent);
    const component = factory.create(this.injector);

    this.appRef.attachView(component.hostView);

    const domElem = (factory.create(this.injector).hostView as EmbeddedViewRef<
      any
    >).rootNodes[0] as HTMLElement;

    console.log('Dom Elem', domElem);
    this.modalProps = {
      title: 'Hello',
      content: domElem,
      hasFooter: true
    };
  }
  onClick() {
    this.visible = !this.visible;
  }
}
