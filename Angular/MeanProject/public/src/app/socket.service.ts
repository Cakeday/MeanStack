import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private url = 'http://localhost:8000';
  private socket;

  constructor(private router: Router) {
    this.socket = io(this.url);
  }

  createGame(game) {
    console.log('this is inside of the socket service');
    console.log(game);
    console.log(this.socket.id);
    this.socket.emit('newGameWithHost', game);

  }

  sendGameObject() {
    return new Observable((observer) => {
      this.socket.on('gamekey', game => {
        console.log('passed the game object BACK to the socket service');
        observer.next(game);
      });
    });
  }




}
