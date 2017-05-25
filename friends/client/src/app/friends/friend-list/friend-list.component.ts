import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from './../friend'
import { FriendsService } from './../friends.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
   friends: Friend[]
   

  @Output() deleteFriendEvent = new EventEmitter();
    //this is going to send the information to the parent about the deleted friend
  constructor(private friendsService: FriendsService, private router: Router) { }

  ngOnInit() {
    	this.getFriends() 

  }
   getFriends(){  
    this.friendsService.get_all_friends()
    .then(friends => this.friends = friends)
    .catch(err => console.log(err));
  }

  // delete(id, index) {
  //   this.friendsService.destroy(id)
  //     .then(data => {
  //       this.router.navigate([''])
  //      })
  //     .catch( err => {
  //       console.log(err);
  //      });
  //   }
    delete(friend: Friend){
		this.friendsService.destroy(friend)
      .then(data => {
        this.router.navigate([''])
       })
      .catch( err => {
        console.log(err);
       });
    }
    
    //this is taking the selected friend and emitting to delete in parent
    //then go to parent HTML and add <app-friend-list (deleteFriendEvent) = "delete()" -  when the event gets emitted
        //then the code will run ie delete()

  }


