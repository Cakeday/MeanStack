import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-read-one',
  templateUrl: './read-one.component.html',
  styleUrls: ['./read-one.component.css']
})
export class ReadOneComponent implements OnInit {

  @Input() singleCake: any;
  @Input() parent: any;

  constructor(public _app: AppComponent) { }

  ngOnInit() {
    console.log(this.parent.average);
  }

}
