import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input() comment: any; 

  idComment!: number;
  content!: string;
  contributor!: string | null;
  date!: string;

  constructor() { }

  ngOnInit() {
    console.log(this.comment);

    this.idComment = this.comment.id || 0; // Initialisation avec une valeur par défaut, ajuste selon tes besoins
    this.content = this.comment.content || ''; // Initialisation avec une valeur par défaut, ajuste selon tes besoins
    this.contributor = null; // Initialisation valide car le type est string | null
    this.date = this.comment.createdOn || ''; // Initialisation avec une valeur par défaut, ajuste selon tes besoins
    console.log(this.date);
  }
}