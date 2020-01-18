import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'public';
  tasks = [];

  constructor(private _httpService: HttpService){

  }

  ngOnInit(){
    this.getTasksFromService();
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our data!", data);
      for(let key in data){
        this.tasks.push(data[key])
      }
    })
  }

  getOneTaskFromService(id){
    let observable = this._httpService.getOneTask(id);
    observable.subscribe(data => {
      console.log("Got our single data!", data);
      this.tasks = data['one_task']
    })
  }

  createTaskFromService(){
    let observable = this._httpService.createTask();
    observable.subscribe(data => {
      console.log("created our data!", data);
      this.tasks = data['created']
    })
  }

  updateTaskFromService(id){
    let observable = this._httpService.updateTask(id);
    observable.subscribe(data => {
      console.log("updated our data!", data);
      this.tasks = data['updated']
    })
  }

  deleteTasksFromService(id){
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log("deleted our data!", data);
      this.tasks = data['tasks']
    })
  }

}
