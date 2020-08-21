import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

  constructor(

    private http: HttpClient

  ) { }

  private gameListUrl = 'https://v2-api.sheety.co/95862ff34677823d720e517ffb52817e/inGame/feuille1';
  public gameList: any = [];

  getGameList(): any {
    return this.http.get(this.gameListUrl);
  }

  showGameList(): any {
    this.getGameList().subscribe(data => {
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            this.gameList.push(data[key]);
          }
        }
      });
  }

  ngOnInit(): void {
    this.showGameList();
  }
}
