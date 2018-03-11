import { Injectable } from "@angular/core";
import { UserInformation } from "../entities/userInformation";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ParamsService{

   // userinfoServ: any;
    id:string;
    public userinfoServ = {} as UserInformation;

    constructor(){}

    setLoggedInUser(userinfoServ: any){
        console.log('setUser: ' + userinfoServ.email);
        this.userinfoServ = userinfoServ;
        console.log('setUser this : ' + this.userinfoServ.email);
      }

      getLoggedInUser(): any{
        console.log('getUser email gettter: '+this.userinfoServ.email);
        console.log('getUser id gettter: '+this.userinfoServ.id);
        console.log('getUser about gettter: '+this.userinfoServ.about);
        return this.userinfoServ;
      }

      setId(id:string){
        console.log(' PARAM:  id:   ' + id);
        this.id=id;
      }

      getId(): string{
        console.log(' PARAM: this id:   ' + this.id);
        return this.id;
      }
}