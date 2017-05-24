import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendNewComponent } from './friends/friend-new/friend-new.component';
import { FriendEditComponent } from './friends/friend-edit/friend-edit.component';
import { FriendShowoneComponent } from './friends/friend-showone/friend-showone.component';
import { FriendListComponent } from './friends/friend-list/friend-list.component';

import { FriendsService } from "./friends/friends.service";
import { routing } from './app.routes'


@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    FriendNewComponent,
    FriendEditComponent,
    FriendShowoneComponent,
    FriendListComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
