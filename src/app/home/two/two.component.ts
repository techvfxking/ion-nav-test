import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent  implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private nav: NavController
  ) { }

  ngOnInit() {
    const state = this.route.snapshot.data['state'];
  const id = state.id;
  console.log(id);
    
  }

}
