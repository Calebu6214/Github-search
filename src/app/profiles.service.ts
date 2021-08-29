import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  public username: string;
  private myApi='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';
  private clientid='e627f3b9460009b4d57b';
  private clientsecret='f5aa24c242ddd52c5a020c5c98cdb75fceadc7ce';

  constructor(private http:HttpClient) {
    this.username='Calebu6214';
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?myapi="+ this.myApi+ "clientid="+this.clientid +"clientsecret="+this.clientsecret)
     .map((res:any)=>{return res})
     
   }
   getRepos(){
    return this.http.get("https://api.github.com/users/" + this.username +  "/repos?myapi="+ this.myApi+ "clientid="+this.clientid +"clientsecret="+this.clientsecret)
    .map((res:any)=>{return res})
   }

   updateProfile(username:string){
    this.username=username;
   }
  //  ngOnInit(){
  //    this.getUser("Calebu6214")

  //  }
}
