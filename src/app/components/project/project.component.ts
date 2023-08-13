import { Component, Input } from '@angular/core';
import { Project } from '../project-page/project-page.component';

@Component({
  selector: 'app-project',
  template: `
    <div class="project">
      <img [src]="project.url">
      <div class="project-bottomdiv">
        <div class="project-info">
          <h1>{{project.title}}</h1>
          <p>{{project.description}}</p>
        </div>
        <div class="project-buttons">
          <button><img src="/assets/github-mark.png"></button>
          <button>Live</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @Input() project!:Project
}
