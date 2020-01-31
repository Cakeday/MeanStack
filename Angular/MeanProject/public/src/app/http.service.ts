import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  findAllGames() {
    return this._http.get('/api/findAll')
  }
  findOneGame(id) {
    return this._http.get(`/api/findOne/${id}`)
  }
  createGame(object) {
    return this._http.post('/api/create', object)
  }
  updateOneGame(object) {
    return this._http.put('/api/updateOne', object)
  }
  deleteOneGame(id) {
    return this._http.delete(`/api/deleteOne/${id}`)
  }
  


  findAllSubjectCards() {
    return this._http.get('/api/subjectcard/findAll')
  }
  findOneSubjectCard(id) {
    return this._http.get(`/api/subjectcard/findOne/${id}`)
  }
  createSubjectCard(object) {
    return this._http.post('/api/subjectcard/create', object)
  }
  updateOneSubjectCard(object) {
    return this._http.put('/api/subjectcard/updateOne', object)
  }
  deleteOneSubjectCard(id) {
    return this._http.delete(`/api/subjectcard/deleteOne/${id}`)
  }
  


  findAllPlayerCards() {
    return this._http.get('/api/playercard/findAll')
  }
  findOnePlayerCard(id) {
    return this._http.get(`/api/playercard/findOne/${id}`)
  }
  createPlayerCard(object) {
    return this._http.post('/api/playercard/create', object)
  }
  updateOnePlayerCard(object) {
    return this._http.put('/api/playercard/updateOne', object)
  }
  deleteOnePlayerCard(id) {
    return this._http.delete(`/api/playercard/deleteOne/${id}`)
  }
  

  
  findAllPlayers() {
    return this._http.get('/api/player/findAll')
  }
  findOnePlayer(id) {
    return this._http.get(`/api/player/findOne/${id}`)
  }
  createPlayer(object) {
    return this._http.post('/api/player/create', object)
  }
  updateOnePlayer(object) {
    return this._http.put('/api/player/updateOne', object)
  }
  deleteOnePlayer(id) {
    return this._http.delete(`/api/player/deleteOne/${id}`)
  }
  
}
