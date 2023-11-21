import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent  implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var value = this.route.snapshot.params['data'];
    console.log(value);
  }

}
