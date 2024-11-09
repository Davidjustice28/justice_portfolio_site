import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ContentDisplayComponent } from './components/content-display/content-display.component';
import { ProjectComponent } from './components/project/project.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperienceTechnologyComponent } from './components/experience-technology/experience-technology.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ContentDisplayComponent,
    ProjectComponent,
    EmailFormComponent,
    AboutPageComponent,
    ProjectPageComponent,
    ExperiencePageComponent,
    ExperienceComponent,
    ExperienceTechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
