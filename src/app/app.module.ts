import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LandingComponent } from './landing/landing.component';
import { ComputerComponent } from './computer/computer.component';
import { GamelistComponent } from './gamelist/gamelist.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LandingComponent,
    ComputerComponent,
    GamelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }