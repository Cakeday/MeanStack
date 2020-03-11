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
  socketId: string;

  constructor(private router: Router) {
    this.socket = io(this.url);
    // this.socket.on('connect', () => {
    //   this.socketId = this.socket.id;
    // });
  }



  // can i use this function for everything?...
  sendUpdate(game) {
    console.log('adding the host; now in the socket service...');
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


  getClientID() {
    return new Observable((observer) => {
      this.socket.on('connect', () => {
        this.socketId = this.socket.id;
        observer.next(this.socketId);
        observer.complete();
      });
    });
  }

  isDisconnected() {
    return new Observable((observer) => {
      console.log('disconnected from the server...');
    });
  }



}
