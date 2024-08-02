import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
    <div [ngClass]="{darkMode: darkmode, lightMode: !darkmode, page:true}">
      <h1>Hi, I'm David Justice</h1>
      <p class="first-paragraph">As a software engineer, I build optimized and maintainable web-based services with modern technologies, primarily TypeScript.
      While most of my professional experience is based around the JavaScript ecosystem, I am very comfortable with Python and Go. 
      </p>
      <p id="body-text">Some of my experience includes: maintaining both Angular & React codebases, 
        integrating with countless third-party APIs like Twilio & Plaid, writing a crap load of unit tests with Jest & Mocha, utilizing Docker and K8s to containerize applications, and 
        Leading a vanilla JS to TypeScript codebase migration. On a personal note, I am a husband and father awesome kids. In my free time, I am like to hike, play basketball, watch UFC matches, and read. Currently I reside in the Lehi, Utah area.
      </p>
      <!-- <h2 style="width: 70%; margin: 0;">Some of my experiences includes:</h2>
        <ul class="history-list">
          <li>Maintaining both Angular & React codebases</li>
          <li>Integrating with countless third-party APIs like Twilio, Plaid, GCP Translate, etc.</li>
          <li>Writing a crap load of unit tests with Jest & Mocha</li>
          <li>Using Docker and k8s to containerize applications</li>
          <li>Leading a vanilla JS to TypeScript codebase migration</li>
          <li>Migrating a MongoDB database to a relational one</li>
          <li>Learning React Native then desiging, building, and deploying an iOS app to app store within 10 months</li>
        </ul> -->
      <div id="about-pagebuttons">
        <button><a href="https://github.com/Davidjustice28"><img src="assets/github-mark.png"></a></button>
        <button><a href="https://linkedin.com/in/david-justice-220072149"><img src="assets/linkedin.png"></a></button>
      </div>
    </div>
  `,
  styleUrls: ['./page.component.css'],
})
export class AboutPageComponent {
  @Input() darkmode!: boolean
}
