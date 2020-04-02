import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { SocketService } from '../socket.service';
import { GameCopyService } from '../game-copy.service';

import Cookies from 'js-cookie';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  game: any;
  currentPlayer: any;

  constructor(
    private route: Router,
    private http: HttpService,
    private socket: SocketService,
    private gameCopy: GameCopyService,
  ) { }

  ngOnInit() {

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
      isGameStarted: false,
    };

    this.game = this.gameCopy.getGame();




    for (const player of this.game.players) {
      if (Cookies.get(player.id) === player.name) {
        this.currentPlayer = player;
        break;
      }
    }

    if (this.currentPlayer === null) {
      alert('couldnt find the current player!!!!!');
    }


    if (this.currentPlayer.host === true) {
      const deck1 = this.http.findAllPlayerCards();
      deck1.subscribe(data => {
        this.game.player_cards = this.shuffle(data);
        this.socket.sendUpdate(this.game);
        this.gameCopy.setGame(this.game);
      });
      const deck2 = this.http.findAllSubjectCards();
      deck2.subscribe(data => {
        this.game.subject_cards = this.shuffle(data);
        this.socket.sendUpdate(this.game);
        this.gameCopy.setGame(this.game);
      });
    }





    const updates = this.socket.getUpdate();
    updates.subscribe(game => {
      console.log('updated the current game!!!');
      this.game = game;


      // whenever a player joins the game, this loop fires and gives everyone without cards 7 cards
      for (const player of this.game.players) {
        if (player.hand[0] === null) {
          for (let i = 0; i <= 7; i++) {
            player.hand.push(this.game.pop());
            this.gameCopy.setGame(this.game);
            this.socket.sendUpdate(this.game);
          }
        }
      }
      if (this.game.isGameStarted === true) {
        this.startGame();
      }
      this.gameCopy.setGame(game);
    });
  }



  emitStart() {
    if (this.currentPlayer.host === true) {
      this.game.isGameStarted = true;
      this.socket.sendUpdate(this.game);
      this.startGame();
    }
  }

  startGame() {
    this.gameCopy.setGame(this.game);
    this.route.navigate(['round']);
  }

  shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
