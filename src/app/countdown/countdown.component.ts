import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  time!: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  diff: number = new Date('2024-09-03 00:00:00').getTime() - new Date().getTime();
  finishDate: Date = new Date('2024-09-03 00:00:00');
  interval:any;

  @Output() gameCanStart: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    this.time = {
      days: 0, 
      hours: 0, 
      minutes: 0, 
      seconds: 0
    };

    this.startCountDown();
  }

  startCountDown():void{
    this.interval = setInterval(()=>{
      if(this.diff > 0){
        this.updateTime();
      }else{
        clearInterval(this.interval);
        this.startGame();
      }
    },1000)
  }

  updateTime() {
    
    const now = new Date();
    this.diff = this.finishDate.getTime() - now.getTime();
    console.log(this.diff)
    if(this.diff < 0) this.startGame();
    else{
    const days = Math.floor(this.diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(this.diff / (1000 * 60 * 60));
    const mins = Math.floor(this.diff / (1000 * 60));
    const secs = Math.floor(this.diff / 1000);
    
    this.time.days = days;
    this.time.hours = hours - days * 24;
    this.time.minutes = mins - hours * 60;
    this.time.seconds = secs - mins * 60;
    }
  }

  startGame():void{
    this.gameCanStart.emit();
  }

  ngOnDestroy():void{
    clearInterval(this.interval);
  }
}
