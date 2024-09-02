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
      question: "¿Cuántos son 3+2x5?",
      answers: [
        { text: "13", solution: true},
        { text: "25", solution: false}
      ]
    },
    {
      question: "¿Alguna vez has cortado el cable ADSL dejando sin internet a toda tu familia?",
      answers: [
        { text: "No", solution: false},
        { text: "Sí", solution: true},
        { text: "Yo? Jamás haría eso", solution: false}
      ]
    },
    {
      question: "¿Quién es el jefe/a del Team Rocket?",
      answers: [
        { text: "Jessie", solution: false},
        { text: "James", solution: false},
        { text: "Meowth", solution: false},
        { text: "Giovanni", solution: true}
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
      question: "Rei ayanami es la portadora del alma de ...",
      answers: [
        { text: "Nadie, ella tiene su propia alma", solution: false},
        { text: "Yui Ikari, la madre de Shinji Ikari", solution: false},
        { text: "Lilith, el segundo ángel", solution: true},
        { text: "Adam, el primer ángel", solution: false},
        { text: "Gendo Ikari, el padre de Shinji Ikari", solution: false},
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
