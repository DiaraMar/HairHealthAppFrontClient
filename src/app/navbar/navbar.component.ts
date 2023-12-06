import { Component, AfterViewInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
//import pathData from '../../assets/pathData.json' todo : use path



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isUserLoggedIn = true;
  isAdmin = false;

  
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.enableNavbarToggle();
  }

  enableNavbarToggle() {
    if (this.navbarToggler && this.navbarCollapse) {
      this.renderer.listen(this.navbarToggler.nativeElement, 'click', () => {
        this.navbarCollapse.nativeElement.classList.toggle('show');
      });

      const navLinks = this.navbarCollapse.nativeElement.querySelectorAll('.nav-link');
      navLinks.forEach((link: HTMLElement) => {
        this.renderer.listen(link, 'click', () => {
          this.navbarCollapse.nativeElement.classList.remove('show');
        });
      });
    }
  }
}