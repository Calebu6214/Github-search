import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profile!: any[];

  constructor(private profileService:ProfilesService) { 
    this.profileService.getProfileInfo().subscribe((profile: any)=>{
      console.log(profile);
      this.profile=profile;
    });
  }

  ngOnInit(): void {
  }

}
