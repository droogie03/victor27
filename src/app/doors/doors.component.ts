import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})
export class DoorsComponent {

  @Output() sustractOneLive: EventEmitter<void> = new EventEmitter<void>();
  @Output() showHangmanGame: EventEmitter<void> = new EventEmitter<void>();
  isExplanationClicked: boolean = false;

  changeExplanationStatus():void{
    this.isExplanationClicked = !this.isExplanationClicked;
  }

  wrongAnswerIsClicked(): void{
    this.sustractOneLive.emit();
  }

  nextGame(): void{
    this.showHangmanGame.emit();
  }

}
