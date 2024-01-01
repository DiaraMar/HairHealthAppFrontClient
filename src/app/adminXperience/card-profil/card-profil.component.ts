import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfilService } from 'src/app/profil.service';

@Component({
  selector: 'app-card-profil',
  templateUrl: './card-profil.component.html',
  styleUrls: ['./card-profil.component.scss']
})
export class CardProfilComponent {

  @Input() username: string = '';

  profil = {
    firstname : '',
    lastname :'',
    email:'',
    phoneNumber:''
  }

  settings={
    sms:null,
    newsletter:null
  }

  profilFormModel ={
    firstname : '',
    lastname :'',
    email:'',
    phoneNumber:''
  }

    settingsFormModel={
    sms:null,
    newsletter:null
  }
  constructor(private profilService : ProfilService){}

  ngOnInit() {
    this.initUserProfil();
    this.initSettings();
  }

  onSubmit(ngForm : NgForm, action : 'generalAccount'|'credentials'){
    if(ngForm.valid){
      if(action=="generalAccount"){
        if(this.profil != this.profilFormModel){
        this.updateProfil();
        }
        if(this.settings != this.settingsFormModel){
          this.updateSettings();
        }
      }

    }
  }


  initUserProfil(){
    this.profilService.getuserProfilBy(this.username).subscribe(
      (response : any) => {
        if (response) {
          this.profil.firstname = response.firstname;
          this.profil.lastname = response.lastname;
          this.profil.email = response.email;
          this.profil.phoneNumber = response.phoneNumber;
          this.populateUserForm();
        }
      },
      (error) => {
        console.log("err");
      }
    ); 
  }

  initSettings(){
    this.profilService.getSettings().subscribe(
      (response : any)=>{
        this.settings.sms=response.sms;
        this.settings.newsletter=response.newsletter;
        this.populateSettingsForm();
      },
      (error)=>{

      }
    );
  }

  populateUserForm(){
    this.profilFormModel.firstname = this.profil.firstname;
    this.profilFormModel.lastname = this.profil.lastname;
    this.profilFormModel.email = this.profil.email;
    this.profilFormModel.phoneNumber = this.profil.phoneNumber;
  }

  populateSettingsForm(){
    this.settingsFormModel.sms= this.settings.sms;
    this.settingsFormModel.newsletter = this.settings.newsletter;
  }

  updateProfil(){
    this.profilService.updateUserProfil(this.profilFormModel).subscribe(
      (response:any)=>{
        this.profil.firstname = response.firstname;
        this.profil.lastname = response.lastname;
        this.profil.email = response.email;
        this.profil.phoneNumber = response.phoneNumber;

        this.populateUserForm();
      },
      (error)=>{

      }
    );

  }

  updateSettings(){
    this.profilService.updateSettings(this.settingsFormModel).subscribe(
      (response:any)=>{
        this.settings.newsletter = response.newsletter;
        this.settings.sms = response.sms;

        this.populateSettingsForm();
      },
      (error)=>{
      }
    );    
  }

}

