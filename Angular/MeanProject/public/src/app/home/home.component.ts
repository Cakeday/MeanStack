import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  game: any;
  player: any;

  constructor(private socket: SocketService) { }

  ngOnInit() {
    this.player = {
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
      }
    };
  }

  addHostCreateGame() {
    this.game.players.push(this.player);
    this.socket.sendUpdate(this.game);
  }



}
