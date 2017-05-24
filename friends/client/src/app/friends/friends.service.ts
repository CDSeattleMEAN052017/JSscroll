import { Injectable } from '@angular/core';
import { Friend } from './friend'
import { Http, Headers, RequestOptions } from "@angular/http"
 
import 'rxjs'

const HEADERS = new Headers({"Content-Type": "application/json"})
const OPTIONS = new RequestOptions({headers: HEADERS})

@Injectable()
export class FriendsService {

  constructor(private http: Http) { }

  get_all_friends(){
    return this.http.get('/friends') //.map so we can go through each piece of return object and make it json data
      .map(data => data.json()).toPromise()
  }

  create_friend(friend: Friend){
    return this.http.post('/friends', friend, OPTIONS).toPromise()
  }
  
  destroy(friend: Friend){
    return this.http.delete('/friends/'+ friend._id, OPTIONS).toPromise()
  }

  edit(friend: Friend){
    return this.http.put("/friends/" + friend._id, friend, OPTIONS).map(data =>{ 
      console.log(data)
      return data.json})
  }

  get_one_friend(friend: Friend){
    return this.http.get('/friends/' + friend._id).toPromise()
  }
}
