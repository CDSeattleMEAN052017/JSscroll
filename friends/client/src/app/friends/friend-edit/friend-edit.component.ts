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
  updatedfriend : Friend; 
  

  constructor(private router: Router, private route: ActivatedRoute, private friendsService: FriendsService) { }

  ngOnInit() {
      
      this.updatedfriend = new Friend; 

      this.friendEdit = {id: this.route.snapshot.params["id"], firstname: this.route.snapshot.params["firstname"], lastname: this.route.snapshot.params["lastname"], birthday: this.route.snapshot.params["birthday"]}

		  this.route.params.subscribe((params) => {
			this.friendEdit = {id: params.id, firstname: params.firstname, lastname: params.lastname, birthday: params.birthday};
			console.log(this.friendEdit);
		})
	}
  update(){
    console.log('update in friend edit')
		this.updatedfriend = {_id: this.friendEdit.id, firstname: this.friendEdit.firstname, lastname: this.friendEdit.lastname, birthday: this.friendEdit.birthday}

		this.friendsService.edit(this.updatedfriend)
			.then(() => {
        console.log('person edited')
				this.updatedfriend = new Friend;
				this.router.navigate(["/"]);
			})
			.catch((err) => console.log(err));
	}

  
      
      //copying over the user to edit
  }


 
