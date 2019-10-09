import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vittal',
  templateUrl: './vittal.component.html',
  styleUrls: ['./vittal.component.less']
})
export class VittalComponent implements OnInit {

  constructor() { }
  name = "Vittal Nellutla";
  image ="assets/vittal.jpg";
  ngOnInit() {
  }

}
