import { Component, Input } from '@angular/core';

export interface Project {
  github: string,
  liveLink: string,
  imageUrl: string,
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
      github: "https://github.com/Davidjustice28/codeaudit",
      liveLink: "#",
      imageUrl:"assets/testimage.jpeg",
      title: "Codebase Syntax CLI Tool",
      description: "Generate reports on codebases compliances with your definied coding syntax standards from terminal"
    },
    {
      github: "https://github.com/Davidjustice28/Inventory-manager",
      liveLink: "https://justice-inventory-manager.netlify.app/",
      imageUrl:"assets/inventory_manager.jpg",
      title: "Inventory Manager (Pending)",
      description: "Web-based platform for managing inventory for anytype of project"
    },
    {
      github: "https://github.com/Davidjustice28/brokersphere",
      liveLink: "http://brokersphere.netlify.app/",
      imageUrl:"assets/brokersphere.jpg",
      title: "Brokersphere",
      description: "Helps real estate agents share referral leads"
    },
    {
      github: "https://github.com/talo-app/talo-backend",
      liveLink: "#",
      imageUrl:"assets/talo.PNG",
      title: "Talo (Ios App Pending)",
      description: "Helps 2nd gen immigrants consistenly stay in tune with their cultures"
    },
    {
      github: "https://github.com/Davidjustice28/connect-four",
      liveLink: "https://davidjustice28.github.io/connect-four/",
      imageUrl:"assets/connect-four.png",
      title: "Connect Four",
      description: "Play old-school connect four in the browser"
    },
    {
      github: "https://github.com/Davidjustice28/coalition-skilltest/tree/main",
      liveLink: "https://davidjustice28.github.io/coalition-skilltest/",
      imageUrl:"assets/landingpage.png",
      title: "Landing Page",
      description: "Converted PSD Mockup To Pure Html Page"
    },
  ]

}
