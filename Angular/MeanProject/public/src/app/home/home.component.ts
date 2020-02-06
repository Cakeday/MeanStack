import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  player: any;
  toggleRegisterComponent: boolean;

  @Output() playerEmitter = new EventEmitter();

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.player = {
      name: '',
      hand: [{}],
      points: 0,
      host: false,
      judge: false,
    };
  }


  host() {
    this.player.host = true;
    console.log(this.player);
    this.playerEmitter.emit(this.player);
  }



}
