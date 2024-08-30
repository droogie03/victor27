import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent {

  @Output() sustractOneLive: EventEmitter<void> = new EventEmitter<void>();
  @Output() returnHome: EventEmitter<void> = new EventEmitter<void>();
  isExplanationClicked: boolean = false;
  isPistaClicked: boolean = false;

  changeExplanationStatus():void{
    this.isExplanationClicked = !this.isExplanationClicked;
  }

  changePistaStatus():void{
    this.isPistaClicked = !this.isPistaClicked;
  }

  wrongAnswerIsClicked(): void{
    this.sustractOneLive.emit();
  }

  finishGame(): void{
    this.returnHome.emit();
  }

}
