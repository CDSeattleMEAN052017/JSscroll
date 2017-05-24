import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { FriendsService} from './../friends.service'

import { Friend } from './../friend'

@Component({
  selector: 'app-friend-edit',
  templateUrl: './friend-edit.component.html',
  styleUrls: ['./friend-edit.component.css']
})
export class FriendEditComponent implements OnInit {
  @Input() friend: Friend;
  friendEdit: {id: '', firstname: '', lastname: '', birthday: '' };
  

  constructor(private router: Router, private route: ActivatedRoute, private friendsService: FriendsService) { }

  ngOnInit() {
      Object.assign(this.friendEdit, this.friend)
      this.friendEdit = {id: this.route.snapshot.params["id"], firstname: this.route.snapshot.params["firstname"], lastname: this.route.snapshot.params["lastname"], birthday: this.route.snapshot.params["birthday"]}

		  this.route.params.subscribe((params) => {
			this.friendEdit = {id: params.id, firstname: params.firstname, lastname: params.last_name, birthday: params.birthday};
			console.log(this.friendEdit);
		})
	}

  
      
      //copying over the user to edit
  }


 
