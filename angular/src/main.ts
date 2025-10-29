import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class='main'>
      <div class='content'>
        <div class='inner-content'>
          <img class="monkey" src="./assets/monkey.svg"/>

          <div class='tech-container'>
            <img src="./assets/angular.svg"/>
          </div>

          <div class='description-container'>
            <header class='header'>
              Angular
            </header>
            <p class='description'>
              Congrats! You've reached the first page of your website. To customize anything on this site, simply go ahead and make changes to your files via t.Webpages.
            </p>
          </div>
        </div>  
      </div>
    </div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
