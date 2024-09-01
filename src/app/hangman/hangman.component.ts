import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent{

  @Output() sustractOneLive: EventEmitter<void> = new EventEmitter<void>();
  @Output() returnHome: EventEmitter<void> = new EventEmitter<void>();
  isExplanationClicked: boolean = false;
  isPistaClicked: boolean = false;
  restartGameBtnShown = false;
  isWordGuessed: boolean = false;

  answer: string = "carsbonara";
  guesses: string[] = [];


  guess(letter: string) {
    if (!letter || this.guesses.includes(letter)) {
      return;
    }
    this.guesses = [...this.guesses, letter];
  }

  reset() {
    this.guesses = [];
    this.restartGameBtnShown = false;
  }

  onGameFinished(isWordGuessed: boolean) {
    if(!isWordGuessed) this.sustractOneLive.emit();
    this.isWordGuessed = isWordGuessed;
    this.restartGameBtnShown = !isWordGuessed;
  }

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
