import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfilesService } from './profiles.service';
import { ProfilesComponent } from './profiles/profiles.component';
// import { Profile } from './repo';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    NotFoundComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
