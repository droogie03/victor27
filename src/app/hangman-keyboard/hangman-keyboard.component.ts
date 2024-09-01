import { Component, OnChanges, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

interface IKey {
  value: string;
  guessed: boolean;
}

@Component({
  selector: 'app-hangman-keyboard',
  templateUrl: './hangman-keyboard.component.html',
  styleUrls: ['./hangman-keyboard.component.css']
})
export class HangmanKeyboardComponent implements OnInit, OnChanges {
  KEY_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  @Input() answer = '';
  @Output() keyPressed = new EventEmitter<string>();
  keys: IKey[] = [];
  constructor() {
    this.keys = this.KEY_CHARS.split('').map((key) => {
      return {
        value: key,
        guessed: false,
      };
    });
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  onKeyClick(key: IKey): void {
    if (key.guessed) {
      return;
    }
    key.guessed = true;
    this.keyPressed.emit(key.value);
  }

}
