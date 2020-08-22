import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ingame';
}
