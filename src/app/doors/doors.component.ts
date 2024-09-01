import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})
export class DoorsComponent implements OnInit{

  @Output() sustractOneLive: EventEmitter<void> = new EventEmitter<void>();
  @Output() showHangmanGame: EventEmitter<void> = new EventEmitter<void>();
  isExplanationClicked: boolean = false;
  isCorrectAnswerSelected: boolean = false;
  showAnswer: boolean = false;
  doorsInformation: any[] = [
    {
      src:'../assets/closed-door.png', answer:false
    },
    {
      src:'../assets/closed-door.png', answer:false
    },
    {
      src:'../assets/closed-door.png', answer:false
    }
  ];

  ngOnInit(): void {
    let randomNumber = Math.floor(Math.random() * this.doorsInformation.length);
    this.doorsInformation[randomNumber].answer = true;
  }

  isImageClicked(index: number): void{
    if(this.doorsInformation[index].answer) this.isCorrectAnswerSelected = true;
    this.doorsInformation[index].src = '../assets/open-door.png';
    setTimeout(() => {
      this.showAnswer = true;
    }, 300);
    
  }

  closeAnswerExplanation(){
    if(!this.isCorrectAnswerSelected) this.sustractOneLive.emit();
    this.showAnswer = false;
  }

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
