import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum PAGE {
  ABOUT="ABOUT",
  CONTACT="CONTACT",
  EXPERIENCE="EXPERIENCE",
  PROJECTS="PROJECTS"
}
@Injectable({
  providedIn: 'root'
})
export class PageService {
  pageSource = new BehaviorSubject(PAGE.ABOUT)
  currentPage!: PAGE
  constructor() { }

  changePage(page: PAGE) {
    this.pageSource.next(page)
    // console.log(`routing to page: ${page}`)
    // console.log(`new current page in service: ${this.pageSource.value}`)
  }
}
