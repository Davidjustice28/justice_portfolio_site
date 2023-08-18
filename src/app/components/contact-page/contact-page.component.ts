import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  template: `
    <div [ngClass]="{darkMode: darkmode, lightMode: darkmode, page:true}">
      <h1>Want to get in touch?</h1>
      <small>- Send me an email -</small>
      <app-email-form/>
    </div>
  `,
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  @Input() darkmode!: boolean
}
