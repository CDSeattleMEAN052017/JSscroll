import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Friend } from './../friend'

import { FriendsService } from "./../friends.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-friend-new',
  templateUrl: './friend-new.component.html',
  styleUrls: ['./friend-new.component.css']
})
export class FriendNewComponent implements OnInit {
  newFriend = new Friend; //defining newFriend to be a label of new friend
  @Output() createNewFriendEvent = new EventEmitter(); // so new friend data can be sent to parent component. import output and EventEmitter
  constructor(private router: Router, private friendsService: FriendsService) { }

  ngOnInit() {
  }
  create(){
      this.router.navigate(["/"]);
      this.friendsService.create_friend(this.newFriend)
        .then(()=> {
           this.newFriend = new Friend;
         
            })
        .catch((err) => console.log(err))

    //call server to save - this.newFriend is setting to a new instance of new friend - redefining label from above
   // this.createNewFriendEvent.emit(this.newFriend)
    //this will send the new friend object to the parent 
    //then go to parent HTML and add <app-friend-new (createNewFriendEvent) = "create()" -  when the event gets emitted
        //then the code will run ie create()
  
   

  }
}
