import { Component, OnInit, Input } from '@angular/core';
import { Friend } from './../friend'
import { FriendsService } from '../friends.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-friend-showone',
  templateUrl: './friend-showone.component.html',
  styleUrls: ['./friend-showone.component.css']
})
export class FriendShowoneComponent implements OnInit {
    @Input() friend: Friend;
    selectedFriend: Friend;

  constructor(private route: ActivatedRoute, private router: Router, private friendsService: FriendsService) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      console.log('ID', params.id);

    this.friendsService.get_one_friend(params.id)
    .subscribe(
      (data) => {this.friend = data},
      (err) => { },
      () => { }
    );
    });
  }
 
}

 
 
  



