import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      console.log("Test")
    })
  }

}
