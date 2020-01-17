import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getOneTask();
    // this.createTask();
    // this.updateTask('5e21446007c0ea0a8baa45b0');
    // this.deleteTask();
    // this.getTasks();
  }

  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  getOneTask(){
    let tempObservable = this._http.get('/tasks/5e1feb40bd09defccd667add');
    tempObservable.subscribe(data => console.log("Got a single task!", data));
  }

  createTask(){
    let tempObservable = this._http.post('/tasks', {title: "This was YAYAYAYAYAY made using angular", description: "ANGULAR2", completed: false});
    tempObservable.subscribe(data => console.log("CREATED a single Task!", data))
  }

  updateTask(id){
    let tempObservable = this._http.put('/tasks/'+id, {title: "This was UPDATED using angular", description: "ANGULAR", completed: false});
    tempObservable.subscribe(data => console.log("UPDATED a single Task!", data))
  }

  deleteTask(id){
    let tempObservable = this._http.delete('/tasks/'+id);
    tempObservable.subscribe(data => console.log("Deleted a single Task!", data))
  }



}
