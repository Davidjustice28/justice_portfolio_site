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
 
  checkIfExperiencePage(): boolean {
    return this.currentPage === PAGE.EXPERIENCE
  }
  checkIfProjectsPage(): boolean {
    return this.currentPage === PAGE.PROJECTS
  }
  // pages used to alternate between white and black but based off feedback all dark theme
  checkIfMenuShouldBeDark(): boolean {
    switch(this.currentPage) {
      case PAGE.ABOUT:
        return true
      case PAGE.EXPERIENCE:
        return true
      case PAGE.PROJECTS:
        return true
      default:
        return true
    }
  }
}
