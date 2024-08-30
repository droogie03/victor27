import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  @Input() isGameStarted: boolean = false;
  @Output() vistorIsReadyToStartTheGame: EventEmitter<void> = new EventEmitter<void>();
  isVictorReady: boolean = false;
  isGameCancelled: boolean = false;

  ngOnInit(): void {
  }

  startGame(){
    this.isGameStarted = true;
  }

  noStartGame(){
    this.isGameStarted = false;
  }

  vistorIsReady(): void{
    this.vistorIsReadyToStartTheGame.emit();

  }

  victorIsNotReady(){
    this.isGameStarted = false;
    this.isGameCancelled = true;
  }



}
