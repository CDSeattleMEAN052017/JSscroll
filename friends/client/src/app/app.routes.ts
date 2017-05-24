import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { FriendNewComponent } from './friends/friend-new/friend-new.component';
import { FriendListComponent } from "./friends/friend-list/friend-list.component";
import { FriendEditComponent } from "./friends/friend-edit/friend-edit.component";
import { FriendShowoneComponent } from "./friends/friend-showone/friend-showone.component";


const APP_ROUTES: Routes = [
    { path: '', component: FriendListComponent, pathMatch: 'full' },
    { path: 'new', component: FriendNewComponent },
    { path: 'edit/:id', component: FriendEditComponent },
    { path: 'show/:id', component: FriendShowoneComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);

