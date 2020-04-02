import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { GameCopyService } from '../game-copy.service';

import Cookies from 'js-cookie';

import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  game: any;
  player: any;
  isHost: boolean;
  isPlayer: boolean;
  isGameStarted: boolean;

  constructor(
    private socket: SocketService,
    private gameCopy: GameCopyService,
    private route: Router
    ) { }

  ngOnInit() {
    this.player = {
      id: '',
      name: '',
      hand: [],
      points: [],
      host: false,
      judge: false,
    };

    this.game = {
      subject_cards: [],
      player_cards: [],
      players: [],
      settings: {
        drawTwoSubjects: false,
        meritocracy: false,
        smoothOperator: false,
        biggestLoser: false,
        trading: false,
        gamblingPoints: false,
      },
    };

    this.isGameStarted = false;

    this.isHost = false;
    this.isPlayer = false;


    // this fetches a socket id for authentication of the user
    const observable = this.socket.getClientID().pipe(first());
    observable.subscribe(id => {
      this.player.id = id;
    });

    // this updates the game object if anyone alters it
    const updates = this.socket.getUpdate();
    updates.subscribe(game => {
      console.log('updated the current game!!!');
      this.game = game;
      this.gameCopy.setGame(game);
    });
  }







  addHostCreateGame() {
    console.log('adding a host and creating a game in the component...');
    this.player.host = true;
    if (this.player.id) {
      Cookies.set(this.player.id, this.player.name);
      console.log(Cookies.get('here is the player id stored in the cookie' + this.player.id));
      this.game.players.push(this.player);
    } else {
      console.error('There wasnt an id associated with the player!');
      alert('There wasnt an id associated with the player!');
    }
    // this backs up the game to a stringified cookie
    this.gameCopy.setGame(this.game);

    // this sends the updated game to server --> all connected clients
    this.socket.sendUpdate(this.game);
    this.route.navigate(['/lobby']);
  }


  
  addPlayerToGame() {
    this.isPlayer = true;
    if (this.player.id) {
      Cookies.set(this.player.id, this.player.name);
      console.log(Cookies.get('here is the player id stored in the cookie' + this.player.id));
      this.game.players.push(this.player);
    } else {
      console.error('There wasnt an id associated with the player!');
      alert('There wasnt an id associated with the player!');
    }

    this.gameCopy.setGame(this.game);
    this.socket.sendUpdate(this.game);
    this.route.navigate(['/lobby']);

  }







  toggleHostForm() {
    this.isHost = this.isHost === false ? true : false;
  }

  togglePlayerForm() {
    this.isPlayer = this.isPlayer === false ? true : false;
  }



}
