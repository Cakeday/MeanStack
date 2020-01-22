import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class HttpService {

  constructor(private _http: HttpClient) { 

  }

  getTasks(){
    let tempObservable = this._http.get('/tasks');
    return tempObservable;
  }

  getOneTask(id){
    let tempObservable = this._http.get('/tasks/'+id);
    return tempObservable;
  }

  createTask(newTask){
    let tempObservable = this._http.post('/tasks', newTask);
    return tempObservable;
  }

  updateTask(id){
    let tempObservable = this._http.put('/tasks/'+id, {title: "This was UPDATED using angular", description: "ANGULAR", completed: false});
    return tempObservable;
  }

  deleteTask(id){
    let tempObservable = this._http.delete('/tasks/'+id);
    return tempObservable;
  }

  

}
