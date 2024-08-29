import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent {

  @Output() restartGameInQuizz: EventEmitter<void> = new EventEmitter<void>();

  
  restartGame(): void{
    this.restartGameInQuizz.emit();
  }



}
