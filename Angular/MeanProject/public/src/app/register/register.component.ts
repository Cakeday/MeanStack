import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() player: any;
  playerName: string;
  game: any;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    console.log('this is on the register component now: ' + this.player);
    this.playerName = '';
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

  createGameWithHost() {
    this.player.name = this.playerName;
    this.game.players.push(this.player);
    console.log(this.game);
    this.socketService.createGame(this.game);
  }

}
