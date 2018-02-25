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

    // make variable that create the component
    let loader = this.loadingController.create({
      content: 'Loading Friends...'
      //spinner: 'dots'
    });
      loader.present().then(() => {
        // and then() call api service to fetch data
        this.userServ.getUsers().subscribe(data => {
          // set the fetched data
          this.users = data;
          console.log(this.users.photoURL);
          // close the loading component
          loader.dismiss();
        });
      });
      
    }

  }
