import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ContentDisplayComponent } from './components/content-display/content-display.component';
import { ProjectComponent } from './components/project/project.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { EmailFormComponent } from './components/email-form/email-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ContentDisplayComponent,
    ProjectComponent,
    SocialIconsComponent,
    EmailFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
