import { Input, Component } from '@angular/core';

@Component({
  selector: 'angular-component',
  templateUrl: './angular-component.html',
  styleUrls: ['./angular-component.scss']
})
export class AngularComponent {
  @Input() visible: boolean;

  constructor() {}
}
