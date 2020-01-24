import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() taskToShow : any;

  constructor(public _app: AppComponent) { }

  ngOnInit() {
  }
}
