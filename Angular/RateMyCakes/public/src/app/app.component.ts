import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {

  title = 'public';
  allCakes:any = [];
  singleCake: any;
  newCake: any;
  cakeToEdit: any;
  rating: any;
  average: Number;
  self;





  constructor(private _httpService: HttpService) {
    this.getAllCakes();
  }

  ngOnInit() {
    this.newCake = {baker: "", cake: "", _ratings: []};
    this.singleCake = {baker: "", cake: "", _ratings: []};
    this.cakeToEdit = {baker: "", cake: "", _ratings: []};
    this.rating = {rating: 1, comment: ""};
    this.average = 0
    this.self = this;
  }

  getAllCakes() {
    let observeable = this._httpService.getAllCakes();
    observeable.subscribe(data => {
      console.log("Here are all the tasks" + data)
      this.allCakes = data;
    })
  }
  
  getOneCake(cake) {
    let observeable = this._httpService.getOneCake(cake);
    observeable.subscribe(data => {
      console.log("Fetched a single ceeeeake" + data)
      this.singleCake = data;
      this.findAvg(this.singleCake);
    })
  }

  createCake() {
    let observeable = this._httpService.createCake(this.newCake);
    observeable.subscribe(data => {
      console.log("Created the cake " + data)
      this.newCake = {baker: "", cake: "", _ratings: []}
      this.getAllCakes();
    })
  }

  updateOneCake() {
    this.cakeToEdit._ratings.push(this.rating);
    let observeable = this._httpService.updateOneCake(this.cakeToEdit);
    observeable.subscribe(data => {
      console.log("Rated the cake " + data)
      this.rating = {rating: 1, comment: ""};
    })
  }

  selectToRate(cake) {
    this.cakeToEdit = cake
  }

  findAvg(cake) {
    console.log("Getting the rating...")
    let counter: number = 0;
    for(var i = 0; i<cake._ratings.length; i++) {
      counter += cake._ratings[i].rating;
    };
    this.average = counter/i;
    console.log(this.average);
  }


}
