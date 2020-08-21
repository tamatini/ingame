import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('.text-animate').css({
        transform: 'translate3d(0, 0, 0)',
        opacity: '1',
      });
      $('.gamer-animate').css({
        transform: 'translate3d(0, 0, 0)',
        opacity: '1'
      });
    });
  }
}
