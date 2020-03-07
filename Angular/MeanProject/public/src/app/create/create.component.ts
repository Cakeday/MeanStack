import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  subjectCard: any;
  playerCard: any;
  allSubjectCards: any;
  allPlayerCards: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.subjectCard = {text: ''};
    this.playerCard = {text: ''};
    this.allSubjectCards = [{}];
    this.allPlayerCards = [{}];
  }



  createSubjectCard() {
    const observeable = this.http.createSubjectCard(this.subjectCard);
    observeable.subscribe(data => {
      console.log('created your subject card' + this.subjectCard);
      this.subjectCard = {text: ''};
      this.getAllSubjectCards();
    });
  }

  createPlayerCard() {
    const observeable = this.http.createPlayerCard(this.playerCard);
    observeable.subscribe(data => {
      console.log('created your player card' + this.playerCard);
      this.playerCard = {text: ''};
      this.getAllPlayerCards();
    });
  }

  getAllSubjectCards() {
    const o = this.http.findAllSubjectCards();
    o.subscribe(data => {
      console.log('got all the subject cards');
      this.allSubjectCards = data;
    });
  }

  getAllPlayerCards() {
    const o = this.http.findAllPlayerCards();
    o.subscribe(data => {
      console.log('got all the player cards');
      this.allPlayerCards = data;
    });
  }

  deleteSubject(card) {
    const o = this.http.deleteOneSubjectCard(card._id);
    o.subscribe(data => {
      console.log('deleted subject card');
      this.getAllSubjectCards();
    });
  }

  deletePlayer(card) {
    const o = this.http.deleteOnePlayerCard(card._id);
    o.subscribe(data => {
      console.log('deleted player card');
      this.getAllPlayerCards();
    });
  }

}






