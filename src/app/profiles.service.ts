import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  private username: string;
  private myApi='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';

  constructor(private http:HttpClient) {
    this.username='Calebu6214';
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?myapi="+ this.myApi)
     .map((res:any)=>{return res})
     
   }
}
