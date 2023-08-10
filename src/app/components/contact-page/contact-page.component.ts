import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  template: `
   <div [ngClass]="{darkMode: darkmode, lightMode: !darkmode, page:true}">
      Contact Page
    </div>
  `,
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  @Input() darkmode!: boolean
}
