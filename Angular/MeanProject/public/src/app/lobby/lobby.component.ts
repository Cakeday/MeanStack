import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  game: any;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.game = this.socketService.sendGameObject().subscribe();
    console.log('this is inside the lobby component');
    console.log(this.game);
  }

}
