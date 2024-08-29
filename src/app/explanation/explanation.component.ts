import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.css']
})
export class ExplanationComponent {
  @Output() showQuizzComponent: EventEmitter<void> = new EventEmitter<void>();
  gojoExplanation: string = 'Hola, soy Gojo! Me comentan que hoy es tu cumpleaños...';
  gojoExplanationArray: string[] = ["Para celebrarlo, tendrás que hacer una serie de juegos.", "No te preocupes que en cada juego tendrás la opción de explicación para entender que tendrás que hacer.","De lo que sí te tendrás que preocupar es de no perder tus vidas...o... GAME OVER", "Como puedes ver arriba a la izquierda, empiezas con 3 vidas, que no son muchas!","¿Qué me dices, empezamos?"]; 
  countExplanation: number = -1;  

  startFirstGame(): void{
    this.showQuizzComponent.emit();
  }

  nextExplanation():void{
    this.countExplanation++;
    this.gojoExplanation = this.gojoExplanationArray[this.countExplanation];
  }

}
