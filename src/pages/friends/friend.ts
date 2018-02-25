import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../api/userService';
import { Observable } from 'rxjs/Observable';
import { User } from '../../entities/user';
import { UserInformation } from '../../entities/userInformation';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html'
})
export class FriendsPage  implements OnInit {
 // users: Observable<UserInformation[]>;
  public users;

  constructor(public navCtrl: NavController,
    private userServ: UserService,
    private loadingController: LoadingController) {
  }


  ngOnInit() {
    this.getUsers();

  }

  getUsers() {
      this.userServ.getUsers().subscribe(
        // the first argument is a function which runs on success
        data => { this.users = data},
        // the second argument is a function which runs on error
        err => console.error(err),
        // the third argument is a function which runs on completion
        () => console.log('done loading foods')
      );
    }

  }
