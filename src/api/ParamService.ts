import { Injectable } from "@angular/core";
import { UserInformation } from "../entities/userInformation";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ParamsService{

    userinfoServ: UserInformation;

    setLoggedInUser(userinfoServ: UserInformation){
        console.log('setUser: '+userinfoServ);
        this.userinfoServ = userinfoServ;
      }

      getLoggedInUser(): UserInformation{
        console.log('getUser: '+this.userinfoServ);
        return this.userinfoServ;
      }
}