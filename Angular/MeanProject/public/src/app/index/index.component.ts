import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  user: any;
  game: any;
  subjectCards: any;
  playerCards: any;
  player: any;

  constructor(private http: HttpService, private socket: SocketService) { }

  ngOnInit() {
    // this.user = {name: "", hand: [{}], points: 0, host: false, judge: false};
    // this.game = { subject_cards: [{}], player_cards: [{}], players: [{}],
    //   settings: {
    //     drawTwoSubjects: false,
    //     meritocracy: false,
    //     smoothOperator: false,
    //     biggestLoser: false,
    //     trading: false,
    //     gamblingPoints: false,
    //   }
    // }
  }

  playerEmitter(event) {
    console.log('This is from the index component: ' + event);
    this.player = event;
  }

  

}
