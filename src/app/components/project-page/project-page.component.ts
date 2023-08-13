import { Component, Input } from '@angular/core';

export interface Project {
  url: string,
  title:string,
  description: string
}
@Component({
  selector: 'app-project-page',
  template: `
   <div [ngClass]="{darkMode: darkmode, lightMode: !darkmode, page:true}">
      <h1>Recent Projects</h1>
      <div id="project-grid">
        <app-project *ngFor="let project of projects" [project]="project"/>
      </div>

    </div>
  `,
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {
  @Input() darkmode!: boolean
  projects:Project[] = [
    {
      url:"/assets/brokersphere.jpg",
      title: "Brokersphere",
      description: "Helps real estate agents share referral leads"
    },
    {
      url:"/assets/inventory_manager.jpg",
      title: "Inventory Manager",
      description: "Web-based platform for managing inventory for anytype of project"
    },
    {
      url:"/assets/talo.PNG",
      title: "Talo (Ios App In Progress)",
      description: "Helps 2nd gen immigrants consistenly stay in tune with their cultures"
    },
    {
      url:"/assets/connect_four.jpg",
      title: "Connect Four Multiplayer Edition",
      description: "Play against a friend in connect four anytime, anywhere"
    },

    {
      url:"/assets/snippets.jpg",
      title: "Mycodeyourcode.com (In Progress)",
      description: "Developer platform for quickly finding coding solutions"
    },
    {
      url:"/assets/testimage.jpeg",
      title: "Codebase Syntax CLI Tool",
      description: "Generate reports on codebases compliances with your definied coding syntax standards from terminal"
    },
  ]

}
