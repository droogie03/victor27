import { Component } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent {
  isExplanationClicked: boolean = false;
  isPistaClicked: boolean = false;

  changeExplanationStatus():void{
    this.isExplanationClicked = !this.isExplanationClicked;
  }

  changePistaStatus():void{
    this.isPistaClicked = !this.isPistaClicked;
  }

}
