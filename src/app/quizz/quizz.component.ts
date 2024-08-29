import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {

  @Output() sustractOneLive: EventEmitter<void> = new EventEmitter<void>();
  @Output() showDoorsGame: EventEmitter<void> = new EventEmitter<void>();
  isExplanationClicked: boolean = false;

  changeExplanationStatus():void{
    this.isExplanationClicked = !this.isExplanationClicked;
  }

  wrongAnswerIsClicked(): void{
    this.sustractOneLive.emit();
  }

  nextGame(): void{
    this.showDoorsGame.emit();
  }

}
