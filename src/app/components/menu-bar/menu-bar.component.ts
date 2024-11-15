import { Component, Input, inject } from '@angular/core';
import { PAGE, PageService } from 'src/app/page.service';

@Component({
  selector: 'app-menu-bar',
  template: `
    <div id="menu-bar" [ngClass]="{darkMode:darkmode, lightMode: !darkmode}" >
      <img class="avatar-img" src="assets/profile_img.jpg" (click)="handleDropdownVisibility()"/>
      <img [class]="'menu-img ' + (menuVisible ? ' expanded' : '')" src="assets/list-bold.svg" (click)="handleDropdownVisibility()"/>
      <ul [ngClass]="{menuVisible: menuVisible, menuHidden: !menuVisible, lightMode: !darkmode}">
        <li (click)="routeToAboutPage()" [ngClass]="{darkModeLi: darkmode, lightModeLi: !darkmode}">About Me</li>
        <li (click)="routeToExperiencePage()" [ngClass]="{darkModeLi: darkmode, lightModeLi: !darkmode}">Experience</li>
        <li (click)="routeToProjectsPage()" [ngClass]="{darkModeLi: darkmode, lightModeLi: !darkmode}">Projects</li>
      </ul>
    </div>
  `,
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  @Input() darkmode!: boolean
  menuVisible:boolean = false
  pageService = inject(PageService)

  handleDropdownVisibility() {
    if(this.menuVisible)
    {
      this.menuVisible = false
    } else {
      this.menuVisible = true
    }
  }

  routeToAboutPage() {
    this.pageService.changePage(PAGE.ABOUT)
    this.handleDropdownVisibility()
  }
  routeToProjectsPage() {
    this.pageService.changePage(PAGE.PROJECTS)
    this.handleDropdownVisibility()
  }
  routeToExperiencePage() {
    this.pageService.changePage(PAGE.EXPERIENCE)
    this.handleDropdownVisibility()
  }
  
  handleMouseOutEvent() {
    setTimeout(() => {
      this.menuVisible = false
    }, 500);
  }
}
