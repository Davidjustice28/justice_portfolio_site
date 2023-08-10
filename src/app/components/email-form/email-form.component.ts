import { Component } from '@angular/core';

export type EmailFormInputType = "email" | "name" | "subject" | "message";
@Component({
  selector: 'app-email-form',
  template: `
    <form id="email-form" [action]="">
      <label>Name</label>
      <input type="text" (change)="handleInputChange($event, 'email')"/>
      <label>Email</label>
      <input type="email"/>
      <label>Subject</label>
      <input type="text"/>
      <label>Message</label>
      <textarea></textarea>
      <button type="button">Send Email</button>
    </form>
  `,
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {
  name:string=""
  emailAddress:string=""
  subject:string=""
  message:string=""

  // figure out correct type for event
  handleInputChange(event: any, inputType: EmailFormInputType): void {
    const value = event.target.value;
    switch(inputType) {
      case "email":
        this.emailAddress = value;
        break;
      case "message":
        this.message = value;
        break;
      case "name":
        this.name = value;
        break;
      case "subject":
        this.name = value;
        break;
      default:
        this.message = value;
        break;
    }
  }
}
