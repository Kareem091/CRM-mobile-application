import { Injectable } from "@angular/core";
import { UserInformation } from "../entities/userInformation";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ParamsService {

  // userinfoServ: any;
  fullPhoto: string;
  public userinfoServ = {} as UserInformation;

  constructor() { }

  setLoggedInUser(userinfoServ: any) {
    console.log('setUser: ' + userinfoServ.email);
    this.userinfoServ = userinfoServ;
    console.log('setUser this : ' + this.userinfoServ.email);
    console.log('setUser about gettter: ' + this.userinfoServ.fullPhoto);

  }

  getLoggedInUser(): any {
    console.log('getUser email gettter: ' + this.userinfoServ.email);
    console.log('getUser id gettter: ' + this.userinfoServ.id);
    console.log('getUser about gettter: ' + this.userinfoServ.about);
    console.log('getUser about gettter: ' + this.userinfoServ.fullPhoto);
    return this.userinfoServ;
  }

  setFullPhoto(fullPhoto: string) {
    console.log(' PARAM:  fullPhoto:   ' + fullPhoto);
    this.fullPhoto = fullPhoto;
  }

  getFullPhoto(): string {
    console.log(' PARAM: this fullPhoto:   ' + this.fullPhoto);
    return this.fullPhoto;
  }
}