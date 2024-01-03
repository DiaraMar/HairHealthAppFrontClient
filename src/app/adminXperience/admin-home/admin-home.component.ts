import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {


  selectedUser!: string;

  users : any []=[];

  constructor(private adminService : AdminService){}

  ngOnInit() {
    this.initProfils();
  }
  initProfils(){
    this.adminService.getUsers().subscribe(
      (response : any) => {
        if (response) {  
          this.users=response;
        }
      },
      (error) => {
        console.log("err");
      }
    ); 
  }

  selectUser(user: any) {
    this.selectedUser = user;
}
closeModal() {
  // Close the modal here

  // Reset selectedUser to null or an initial state
  this.selectedUser = '';
}

// Method to open the modal for a specific user


}
