import { Component, OnInit, OnChanges } from '@angular/core';

import { Friend } from './friend'
import { FriendsService } from './friends.service'
import { Router } from "@angular/router"

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: Friend[] = []; // this is where all the friends are stored -- the highest friend component

  constructor(private router: Router, private friendsService: FriendsService) { }

  ngOnInit() {
    this.getFriends() // on init so it loads when page is first rendered
  }
  //this is a method use the friends service get_all_friends return(from the promise)
  // in .then(friends <--  is what comes back from server
  //  => this.friends <-- is redefining the friends variable in our scope, making it = to friends)
  
  create(friend : Friend){
     
    this.friendsService.create_friend(friend)
   
    .then(status => this.getFriends())
    .catch(err => console.log(err))
    
    this.friends.push(friend); // this is calling the user array from above and pushing in the new friend that was created
    console.log(friend)                           //and passed through 
  }
  delete(friend: Friend){
    const i = this.friends.indexOf(friend)
    this.friends.splice(i, 1)
  }
  
  getFriends(){  
    this.friendsService.get_all_friends()
    .then(friends => this.friends = friends)
    .catch(err => console.log(err));
  }
 
}
