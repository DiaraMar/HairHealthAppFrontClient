import { Component } from '@angular/core';
import { RoutineService } from '../routine.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


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

  selectedMenuItem: string = "Routines";
  routines: any[] = [];
  diagnostics: any[] = [];
  selectedRoutine: any;
  selectedDiagnostic: any;
  updatedRoutineModel = {
    id: '',
    title: '',
    description: '',
    stages :[] as any[]
  }
  index = 0;
  currentImage = 0;
  imageToShow = '../../assets/Maquette application (512 x 768 px) (1).png';





  constructor(private routineService: RoutineService, private router: Router) { }

  ngOnInit() {
    this.initRoutines();

  }


  ngOnChanges(changes: any) { }

  initRoutines() {
    this.routineService.getRoutines().subscribe(
      (response: any) => {
        if (response) {
          this.routines = response;
          this.selectedRoutine = this.routines[0];
        }
      },
      (error) => {
        console.log("err");
      }
    );
  }

  initDiagnostics() {
    this.routineService.getDiagnostics().subscribe(
      (response: any) => {
        if (response) {
          this.diagnostics = response;
        }
      },
      (error) => {
        console.log("err");
      }
    );
  }

  selectMenuItem(selected: 'Home' | 'Routines' | 'Diagnostic' | 'Goals' | 'HairMap') {

    if (selected === 'Home') {
      this.selectedMenuItem = selected;
      this.router.navigateByUrl('/home');
    }
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
      }, 4000); // Change every 3 seconds, replace this with your logic

    }

  }

  selectRoutine(selected: any) {
    console.log("start select routine");

    this.selectedRoutine = selected;
    console.log(this.selectedRoutine);
    this.updatedRoutineModel.id = selected.id;
    this.updatedRoutineModel.title = selected.title;
    this.updatedRoutineModel.description = selected.description;
    this.updatedRoutineModel.stages = JSON.parse(JSON.stringify(selected.stages));
   


  }

  selectDiagnostic(selected: any) {
    this.selectedDiagnostic = selected;

  }


  onSubmit(ngForm: NgForm, action: 'routine') {
    const isTitleChanged = this.selectedRoutine.title !== this.updatedRoutineModel.title;
    const isDescriptionChanged = this.selectedRoutine.description !== this.updatedRoutineModel.description;
  
    const selectedStagesJSON = JSON.stringify(this.selectedRoutine.stages);
    const updatedStagesJSON = JSON.stringify(this.updatedRoutineModel.stages);
    const areStagesChanged = selectedStagesJSON !== updatedStagesJSON;
  
    if (isTitleChanged || isDescriptionChanged || areStagesChanged) {
      console.log("Changements détectés");
      this.selectedRoutine.title=this.updatedRoutineModel.title;
      this.selectedRoutine.description=JSON.stringify(this.updatedRoutineModel.description);
      this.selectedRoutine.stages=this.updatedRoutineModel.stages;

      this.saveRoutine(this.selectedRoutine);

    } else {
      console.log("Aucun changement détecté");
    }
  }

  updateStageTitle(stageIndex: number, newTitle: string) {
    this.updatedRoutineModel.stages[stageIndex].title = newTitle;
  }

  updateStageDescription(stageIndex: number, newDescription: string) {
    this.updatedRoutineModel.stages[stageIndex].description = newDescription;
  }

  saveRoutine(routine : any) {
    this.routineService.updateRoutine(this.selectedRoutine).subscribe(
      (response : any) => {
        if (response) {
          console.log(response)
        }
      },
      (error) => {
        console.log("err");
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