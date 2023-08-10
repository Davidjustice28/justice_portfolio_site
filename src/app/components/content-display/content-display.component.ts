import { Component, inject, OnInit} from '@angular/core';
import { PAGE, PageService } from 'src/app/page.service';

@Component({
  selector: 'app-content-display',
  template: `
    <div id="content-display" >
      <app-menu-bar [darkmode]="checkIfMenuShouldBeDark()"/>
      <app-about-page *ngIf='checkIfAboutPage()' [darkmode]="true"></app-about-page>
      <app-experience-page *ngIf='checkIfExperiencePage()' [darkmode]="false"></app-experience-page>
      <app-project-page *ngIf='checkIfProjectsPage()' [darkmode]="true"></app-project-page>
      <app-contact-page *ngIf='checkIfContactPage()' [darkmode]="false"></app-contact-page>
    </div>
  `,
  styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent implements OnInit{
  pageService = inject(PageService)
  currentPage!:PAGE
  ngOnInit(): void {
    this.pageService.pageSource.subscribe(page => {
      this.currentPage = page
    })
  }
  checkIfAboutPage(): boolean {
    return this.currentPage === PAGE.ABOUT
  }
  checkIfContactPage(): boolean {
    return this.currentPage === PAGE.CONTACT
  }
  checkIfExperiencePage(): boolean {
    return this.currentPage === PAGE.EXPERIENCE
  }
  checkIfProjectsPage(): boolean {
    return this.currentPage === PAGE.PROJECTS
  }

  checkIfMenuShouldBeDark(): boolean {
    switch(this.currentPage) {
      case PAGE.ABOUT:
        return true
      case PAGE.EXPERIENCE:
        return false
      case PAGE.PROJECTS:
        return true
      case PAGE.CONTACT:
        return false
    }
  }
}
