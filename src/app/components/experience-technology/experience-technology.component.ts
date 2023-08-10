import { Component, Input } from '@angular/core';
import { ExperienceTechnology } from '../experience-page/experience-page.component';

@Component({
  selector: 'app-experience-technology',
  template: `
    <img [src]="technology.url" [ngClass]="{smallIcon: technology.smallerIcon, normalIcon: !technology.smallerIcon}">
  `,
  styleUrls: ['./experience-technology.component.css']
})
export class ExperienceTechnologyComponent {
  @Input() technology!: ExperienceTechnology
}
