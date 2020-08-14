import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ProjectListComponent} from './projects/project-list.component';
import {
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {faBars, faEnvelope} from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'projects', component: ProjectListComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconLib: FaIconLibrary) {
    iconLib.addIcons(faLinkedin, faGithub, faInstagram, faBars, faEnvelope);
  }
}
