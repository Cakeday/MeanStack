import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'public';
  tasks:any = [];
  single_task: any;
  newTask: any;
  editTask: any;

  constructor(private _httpService: HttpService){

  }

  ngOnInit(){
    this.newTask = { title: "", description: "" }
    this.editTask = { title: "", description: "" }
    this.single_task = { title: "", description: "", completed: false }

  }

  getTasksFromService(){
    this.tasks = [];
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our data!", data);
      this.tasks = data;
    })
  }

  getOneTaskFromService(task){
    let observable = this._httpService.getOneTask(task._id);
    observable.subscribe(data => {
      console.log("Got our single data!", data);
      this.single_task = data;
      console.log(this.single_task);
    })
  }

  createTaskFromService(){
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log("created our data!", data);
      this.newTask = { title: "", description: "" }
      this.getTasksFromService();
    })
  }

  updateTaskFromService(task){
    this.editTask = task;
  }

  deleteTasksFromService(task){
    let observable = this._httpService.deleteTask(task._id);
    observable.subscribe(data => {
      console.log("deleted our data!", data);
      this.getTasksFromService();
    })
  }

  actuallyUpdate() {
    let observable = this._httpService.updateTask(this.editTask);
    observable.subscribe(data => {
      console.log("updated our data!", data);
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
