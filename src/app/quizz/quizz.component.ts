import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {

  isExplanationClicked: boolean = false;

  changeExplanationStatus():void{
    this.isExplanationClicked = !this.isExplanationClicked;
  }

}
