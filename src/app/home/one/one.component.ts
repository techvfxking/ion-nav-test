import { Component, OnInit } from '@angular/core';
import { TwoComponent } from '../two/two.component';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent  implements OnInit {

  constructor(
    private nvCtrl: NavController
  ) { }
  component = TwoComponent
  ngOnInit() {}

  async Navigate(){
    await this.nvCtrl.navigateForward(['/home/two',{
      data: JSON.stringify('Hello')
    }]);
  }
}
