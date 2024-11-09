import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
    <div [ngClass]="{darkMode: darkmode, lightMode: !darkmode, page:true}">
      <h1>Hi, I'm David Justice</h1>
      <p class="first-paragraph">As a software engineer, I build optimized and maintainable web-based services with modern technologies.
      While most of my professional experience is based around the TypeScript, I am proficient with Go and Python.
      </p>
      <br/>
      <h2>Some of my experiences includes:</h2>
      <ul class="history-list">
        <li>Maintaining both Angular & React codebases</li>
        <li>Integrating with countless third-party APIs like Twilio, Plaid, GCP Translate, etc.</li>
        <li>Writing a crap load of unit, integration, & e2e tests with Jest, Mocha, & Playwright</li>
        <li>Using Docker and k8s to containerize applications</li>
        <li>Leading a vanilla JS to TypeScript codebase migration</li>
        <li>Migrating a MongoDB database to a MSSQL</li>
        <li>Creating web-scrapers to get news for my various cultures daily</li>
        <li>Utilizing multiple Cloud services on AWS and GCP to deploy applications</li>
        <li>Learning React Native then building and deploying an iOS app to app store within 10 months</li>
      </ul>
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
