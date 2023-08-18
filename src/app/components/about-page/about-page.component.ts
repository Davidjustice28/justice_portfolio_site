import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
    <div [ngClass]="{darkMode: darkmode, lightMode: !darkmode, page:true}">
      <h1>Hi, I'm David Justice</h1>
      <p class="first-paragraph">I build secure and scalable web-applications with modern technologies, primarily with TypeScript. </p>
      <p id="body-text">I see a great value in clean and uniformed code, clear documentation, and lots of testing. While most of my professional experience
        is based around the JavaScript ecosystem, I am very comfortable with Python and Go. Some of my experience includes: third-party api integrations, migrating non relational
        database to relational, coordinating vanilla JS to TypeScript migration, a ton of unit testing, creating solid README files, etc.
        On a personal note, I am a husband and father awesome kids. In my free time, I am like to hike, play basketball, watch UFC matches, and read. Currently I reside in the Lehi, Utah area.
      </p>
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
