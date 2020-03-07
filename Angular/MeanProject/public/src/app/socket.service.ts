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



  // can i use this function for everything?...
  sendUpdate(game) {
    this.socket.emit('sendUpdate', game);
  }

  getUpdate() {
    return new Observable((observer) => {
      this.socket.on('getUpdate', game => {
        console.log('passed the game object from server --> client');
        observer.next(game);
      });
    });
  }




}
