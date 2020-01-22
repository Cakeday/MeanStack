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
  single_task;

  constructor(private _httpService: HttpService){

  }

  ngOnInit(){
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
      this.single_task = data;
      console.log(this.single_task);
    })
  }

  createTaskFromService(newTask){
    let observable = this._httpService.createTask(newTask);
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


  onButtonClick(): void { 
    console.log(`Click event is working`);
  }
  onButtonClickParam(num: Number): void { 
      console.log(`Click event is working with num param: ${num}`);
  }
  onButtonClickParams(num: Number, str: String): void { 
      console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  }
  onButtonClickEvent(event: any): void { 
      console.log(`Click event is working with event: ${event}`);
  }


}
