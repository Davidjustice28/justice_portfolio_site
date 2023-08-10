import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
    <div [ngClass]="{darkMode: darkmode, lightMode: !darkmode, page:true}">
      <h1>Hi, I'm David Justice</h1>
      <p>I build secure and scalable web-applications with modern technologies, primarily with TypeScript. </p>
      <p>Currently based in Utah, I see a great value in good uniformed code, clear documentation, and lots of testing. While most of my professional experience
        is based around the JavaScript ecosystem, I am very comfortable with Python and Go. Some of my experience includes: third-party api integrations, migrating non relational
        database to relational, coordinating vanilla JS to TypeScript migration, a ton of unit testing, creating solid README.mds, etc.
      </p>
      <p>On a personal note, I am a husband and father awesome kids. In my free time, I am like to hike, play basketball, watch UFC matches, and read.
      </p>
      <div id="about-pagebuttons">
        <button><a href="https://github.com/Davidjustice28"><img src="/assets/github-mark.png"></a></button>
        <button>Resume</button>
      </div>
    </div>
  `,
  styleUrls: ['./page.component.css'],
})
export class AboutPageComponent {
  @Input() darkmode!: boolean
}
