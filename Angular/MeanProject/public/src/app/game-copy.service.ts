import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class GameCopyService {

  game: any;


  constructor() { }

  setGame(game): void {
    console.log('stored the reference to the game object in the copy service and cookie');
    this.game = game;
    Cookies.set('game', JSON.stringify(game));
  }

  getGame() {
    if (this.game) {
      console.log('got game from service');
      return this.game;
    } else {
      console.log('got game from cookie');
      return JSON.parse(Cookies.get('game'));
    }
  }

}
