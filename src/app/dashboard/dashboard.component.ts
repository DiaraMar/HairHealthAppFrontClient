import { Component } from '@angular/core';
import { RoutineService } from '../routine.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('2000ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DashboardComponent {

  selectedMenuItem : string = "Routines";
  routines : any [] = [];
  diagnostics : any [] = [];
  stages : any [] = [];
  selectedRoutine: any;
  updatedRoutineModel = {
    id:'',
    title : '',
    description:'',
    createdBy:'',
    createdOn:''
  }
  updatedStagesModel: any[]=[];
  selectedDiagnostic: any;
  currentImage = 0;
  imageToShow = '../../assets/Maquette application (512 x 768 px) (1).png';
  index = 0;


  


  constructor(private routineService : RoutineService){}

  ngOnInit() {
    this.initRoutines();

  }


  ngOnChanges(changes: any) {  }

  initRoutines(){
    this.routineService.getRoutines().subscribe(
      (response : any) => {
        if (response) {
          this.routines = response;
          this.stages = response.stages;
          console.log(this.routines);
        }
      },
      (error) => {
        console.log("err");
      }
    ); 
}

initDiagnostics(){
  this.routineService.getDiagnostics().subscribe(
    (response : any) => {
      if (response) {
        this.diagnostics = response;
      }
    },
    (error) => {
      console.log("err");
    }
  ); 
}

  selectMenuItem(selected : 'Routines' | 'Diagnostic' | 'Goals' | 'HairMap' ){
    if (selected === 'Routines') {
      this.selectedMenuItem = selected;
    }
    if (selected === 'Diagnostic') {
      this.selectedMenuItem = selected;
      this.initDiagnostics();
    }
    if (selected === 'HairMap') {
      this.selectedMenuItem = selected;
      setInterval(() => {
        this.toggleImage();
      }, 3000); // Change every 3 seconds, replace this with your logic
   
    }
    
  }

selectRoutine(selected :any ){
  console.log("select routine");
  console.log(selected);
  this.selectedRoutine = selected;
  this.updatedRoutineModel.id = selected.id;
  this.updatedRoutineModel.title = selected.title;
  this.updatedRoutineModel.description = selected.description;
  this.updatedRoutineModel.createdOn = selected.createdOn;
  this.updatedRoutineModel.createdBy = selected.createdBy;

  this.updatedStagesModel = selected.stages;
  console.log("updated routine");
  console.log(this.updatedRoutineModel);
  console.log("updated stages");
  console.log(this.updatedStagesModel);
}

selectDiagnostic(selected :any ){
  this.selectedDiagnostic = selected;

}


onSubmit(ngForm : NgForm, action : 'routine'){
  console.log("retrieve", ngForm.value);
  console.log("updated routine");
  console.log(this.updatedRoutineModel);
  console.log("updated stages");
  console.log(this.updatedStagesModel);
  console.log("hereeeeeeeeeeee");

console.log(  this.selectedRoutine.stages[0]  )
  if(ngForm.valid){

    }

}

updateStageTitle(stageIndex: number, newTitle: string) {
  this.selectedRoutine.stages[stageIndex].title = newTitle;
  // Mettre à jour updatedStagesModel si nécessaire
}

updateStageDescription(stageIndex: number, newDescription: string) {
  this.selectedRoutine.stages[stageIndex].description = newDescription;
  // Mettre à jour updatedStagesModel si nécessaire
}

saveRoutine() {
  // Utilise le service pour sauvegarder les modifications
  this.routineService.updateRoutine(this.updatedRoutineModel, this.updatedStagesModel).subscribe(
    (response) => {
      // Gérer la réponse en cas de succès
    },
    (error) => {
      // Gérer les erreurs éventuelles
    }
  );
}


toggleImage() {
  if (this.imageToShow === '../../assets/Maquette application (512 x 768 px) (1).png') {
    this.imageToShow = '../../assets/Maquette application (512 x 768 px).png';
  } else {
    this.imageToShow = '../../assets/Maquette application (512 x 768 px) (1).png';
  }
}





}