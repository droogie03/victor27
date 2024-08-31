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
  currentQuestion: number = 0;
  isAnswerSelected: boolean = false;

  questions: any[] = [
    {
      question: "¿Cuál es el planeta más grande del sistema solar?",
      answers: [
        { text: "Sí", solution: true},
        { text: "No", solution: false}
      ]
    },
    {
      question: "¿Es tu novia la mejor?",
      answers: [
        { text: "Sí", solution: true},
        { text: "No", solution: false}
      ]
    },
    {
      question: "¿Quién se cagó en la cama de Singapur?",
      answers: [
        { text: "Julia", solution: false},
        { text: "Víctor", solution: true}
      ]
    }
  ]

  changeExplanationStatus():void{
    this.isExplanationClicked = !this.isExplanationClicked;
  }

  wrongAnswerIsClicked(): void{
    this.sustractOneLive.emit();
  }

  nextGame(): void{
    this.showDoorsGame.emit();
  }

  answerSelected(isCorrectAnswer: string): void{
    this.isAnswerSelected = true;
    if(!isCorrectAnswer) this.sustractOneLive.emit();
  }

  nextAnswer(): void{
    this.currentQuestion++;
    this.isAnswerSelected = false;
  }

}
