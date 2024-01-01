import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild('signUpButton', { static: true }) signUpButton!: ElementRef;
  @ViewChild('signInButton', { static: true }) signInButton!: ElementRef;
  @ViewChild('container', { static: true }) container!: ElementRef;


  signUpFormModel  = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phoneNumber: ''
  };
  
  signInFormModel = {
    email: '',
    password: ''
  };

  errorMessages: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phoneNumber: string;
    login: string;
    register: string;
  } = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phoneNumber: '',
    login: "Authentication failed. Please check your email and password",
    register : "Register failed"
  };

  successMessages: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phoneNumber: string;
    login: string;
    register: string;
  } = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phoneNumber: '',
    login: '',
    register: "register succeed"
  };
  
  constructor(private authService : AuthService) {}

  ngOnInit() {
    this.initUI();

  }

  /* Form Logic */

  onSubmit(ngForm : NgForm, action : 'signUp'|'signIn'){
    if(ngForm.valid){
      if(action=="signUp"){
        this.signUp();
      }
      if(action=="signIn"){
        this.signIn();

      }
    }
  }

  private signUp(){
    this.authService.register(this.signUpFormModel).subscribe(
      (response) => {
        if (response && response.token) {
          
          console.log(this.successMessages.register);
          this.showSignInForm();
        }
      },
      (error) => {
        console.log(this.errorMessages.register);
      }
    );

  }

  private signIn(){
    this.authService.authenticate(this.signInFormModel).subscribe(
      (response) => {
        if (response && response.token) {
          sessionStorage.setItem('token', response.token);
          window.location.href = '/dashboard';
        }
      },
      (error) => {
        console.log(this.errorMessages.login);
      }
    );
  }
  


  /* Form Animation */

  private initUI(){

    if (this.signUpButton && this.signInButton && this.container) {
      this.signUpButton.nativeElement.addEventListener('click', () => {
        this.container.nativeElement.classList.add("right-panel-active");
      });

      this.signInButton.nativeElement.addEventListener('click', () => {
        this.container.nativeElement.classList.remove("right-panel-active");
      });
    }
  }
  showSignInForm() {
    this.container.nativeElement.classList.remove('right-panel-active');
  }
  
  showSignUpForm() {
    this.container.nativeElement.classList.add('right-panel-active');
  }
  
}