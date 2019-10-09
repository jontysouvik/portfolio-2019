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
  vr4utut = "https://www.youtube.com/channel/UCOMkA8ZCLGhDDVapX1hAXzA";
  vr4uent = "https://www.youtube.com/channel/UCKL_sSDEN5Dahf_8851Z18g";
  vitblog = "https://sundarasaivittal.blogspot.com/";
  ngOnInit() {
  }

}
