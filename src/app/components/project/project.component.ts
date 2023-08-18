import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project-page/project-page.component';

@Component({
  selector: 'app-project',
  template: `
    <div class="project">
      <img [src]="project.imageUrl">
      <div class="project-bottomdiv">
        <div class="project-info">
          <h1>{{project.title}}</h1>
          <p>{{project.description}}</p>
        </div>
        <div class="project-buttons">
          <button><a [href]="project.github"><img src="assets/github-mark.png"></a></button>
          <button><a [href]="project.liveLink">{{buttonText}}</a></button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project!:Project
  buttonText: string = ""

  ngOnInit(): void {
    this.generateButtonText();
  }

  generateButtonText(): void {
    if(this.project.liveLink === "#" || this.project.liveLink === "")
    {
      this.buttonText =  "TBD";
    }
    else
    {
      this.buttonText = "Live";
    }
  }
}
