import { Component } from '@angular/core';
import { OneComponent } from './one/one.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  comp = OneComponent
  constructor() {}

}
