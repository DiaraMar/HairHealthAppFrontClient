import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { ProfilService } from 'src/app/profil.service';

@Component({
  selector: 'app-card-profil',
  templateUrl: './card-profil.component.html',
  styleUrls: ['./card-profil.component.scss']
})
export class CardProfilComponent {

  @Input() selectedUser : any;

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
  constructor(private adminService : AdminService){}

  ngOnInit() {
    console.log("in card", this.selectedUser)
    this.initUserProfil();
    this.initSettings();
  }

  onSubmit(ngForm : NgForm, action : 'generalAccount'){
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
    
          this.profil.firstname = this.selectedUser.firstname;
          this.profil.lastname = this.selectedUser.lastname;
          this.profil.email = this.selectedUser.email;
          this.profil.phoneNumber = this.selectedUser.phoneNumber;
          this.populateUserForm();

  }

  initSettings(){

        this.settings.sms=this.selectedUser.sms;
        this.settings.newsletter=this.selectedUser.newsletter;
        this.populateSettingsForm();
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
    this.adminService.updateUserProfil(this.profilFormModel).subscribe(
      (response:any)=>{
        this.profil.firstname = response.firstname;
        this.profil.lastname = response.lastname;
        this.profil.email = response.email;
        this.profil.phoneNumber = response.phoneNumber;

        this.populateUserForm();
        window.location.reload();

      },
      (error)=>{

      }
    );

  }

  updateSettings(){
    this.adminService.updateSettings(this.settingsFormModel).subscribe(
      (response:any)=>{
        this.settings.newsletter = response.newsletter;
        this.settings.sms = response.sms;

        this.populateSettingsForm();
        window.location.reload();

      },
      (error)=>{
      }
    );    
  }

}

