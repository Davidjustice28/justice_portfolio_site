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
      github: "#",
      liveLink: "https://productlamb.com",
      imageUrl:"assets/productlamb_screenshot.png",
      title: "ProductLamb",
      description: "SaaS platform that provides an AI-powered Product Manager for startups"
    },
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
      title: "Inventory Manager",
      description: "Web-based platform for managing inventory for any type of project"
    },
    {
      github: "#",
      liveLink: "https://taloapp.com",
      imageUrl:"assets/talo_screenshot.png",
      title: "Talo (iOS App)",
      description: "Helps 2nd gen immigrants consistently stay in tune with their cultures",
    },
  ]

}
