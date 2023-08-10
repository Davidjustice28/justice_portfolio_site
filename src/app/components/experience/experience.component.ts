import { Component, Input } from '@angular/core';
import { Experience } from '../experience-page/experience-page.component';

@Component({
  selector: 'app-experience',
  template: `
    <div class="work-experience">
      <img/>
      <h1>{{experience.company_name}}: {{experience.position}} <span style="{font-style: italic;}" [ngClass]="{current: experience.currentlyWorkingHere, past: !experience.currentlyWorkingHere}">- {{experience.currentlyWorkingHere ? "Currently" : "Past"}}</span></h1>
      <p>{{experience.milestone}}</p>
      <div class="experience-technologies">
        <app-experience-technology *ngFor="let technology of experience.technologies" [technology]="technology"/>
      </div>
    </div>
  `,
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  @Input() experience!: Experience
}
