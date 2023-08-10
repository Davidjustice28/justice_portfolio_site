import { Component, Input } from '@angular/core';
export interface ExperienceTechnology {
  name: string,
  url: string,
  smallerIcon?: boolean
}
export interface Experience {
  company_name:string,
  position: string,
  currentlyWorkingHere:boolean,
  milestone:string,
  technologies: ExperienceTechnology[]
}

@Component({
  selector: 'app-experience-page',
  template: `
   <div [ngClass]="{darkMode: darkmode, lightMode: !darkmode, page:true}">
      <h1>Professional Experience</h1>
      <div id="experiences-div">
        <app-experience *ngFor="let experience of experiences" [experience]="experience"/>
      </div>
    </div>
  `,
  styleUrls: ['./experience-page.component.css']
})
export class ExperiencePageComponent {
  @Input() darkmode!: boolean
  experiences: Experience[] = [
    {
      company_name: "Notoros IO",
      position: "Junior Backend Developer",
      currentlyWorkingHere: true,
      milestone: "Integrated key third-party APIs like Plaid and Braze, help build an SDK for internal teams to easily interact with third-party apis across different projects, and built out notification functionality",
      technologies: [{name: "Typescript", url: "/assets/typescript.png"}, {name: "MongoDB", url: "/assets/mongo.png", smallerIcon:true}, {name: "Express", url: "/assets/express.png"}, {name: "Redis", url: "/assets/redis.png"}, {name: "Docker", url: "/assets/docker.png"}]
    },
    {
      company_name: "Blyss Dating",
      position: "Backend Developer",
      currentlyWorkingHere: true,
      milestone: "Facilitated converting backend codebase from vanilla JavaScript to a secure Typescript backend and conducted interviews for new developers joining team",
      technologies: [{name: "Javascript", url: "/assets/javascript.png"}, {name: "Typescript", url: "/assets/typescript.png"}, {name: "Express", url: "/assets/express.png"}, {name: "React Native", url: "/assets/react-native.png"}]
    },
    {
      company_name: "Berkshire Hathaway HomeServices",
      currentlyWorkingHere: false,
      position: "Real Estate Agent",
      milestone: "Sold over 4 million in sales volume, mentored 2 upcoming agents at office, and won 2021 BHHS Rookie of the year for region",
      technologies: []

    }
  ]
}