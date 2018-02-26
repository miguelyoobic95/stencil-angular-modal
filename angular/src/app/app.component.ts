import { Component, OnInit } from '@angular/core';
import { ModalContentComponent } from '../components/modal-content/modal-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  visible: boolean = true;

  modalProps = { title: 'Hello', content: new ModalContentComponent(), hasFooter: true };
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
