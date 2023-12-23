import { Component } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hair Xperience ';
  currentUrl: string = '';



  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.router.url;
        console.log('URL actuelle : ', this.currentUrl);
      }
    });
  }


}
