import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profiles.service';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
 
  goToUrl(){
    this.profile.navigate(['/'])
  }

  profile!: any;
  repos!: any;
  username!: string;


  constructor(private profileService:ProfilesService) { 
    this.profileService.getProfileInfo().subscribe((profile: any)=>{
      console.log(profile);
      this.profile=profile;
    });

    this.profileService.getRepos().subscribe(repos=>{
      console.log(repos);
      this.repos=repos;
    });
  }

  findProfile(){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe((profile: any)=>{
      console.log(profile);
      this.profile=profile;
    });

    this.profileService.getRepos().subscribe(repos=>{
      console.log(repos);
      this.repos=repos;
    });
  }

  ngOnInit() {
    
  }

}
