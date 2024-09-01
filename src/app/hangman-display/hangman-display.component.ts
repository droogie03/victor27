import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-hangman-display',
  templateUrl: './hangman-display.component.html',
  styleUrls: ['./hangman-display.component.css']
})
export class HangmanDisplayComponent implements OnChanges{
  @Input() guesses: string[] = [];
  @Input() answer: string = '';
  @Output() gameFinished = new EventEmitter<boolean>();

  MAX_MISTAKES = 7;
  mistakesRemaining: number = this.MAX_MISTAKES;
  success: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    const guessesCurrentValue = changes?.['guesses']?.currentValue;
    console.log(guessesCurrentValue);
    if (
      guessesCurrentValue &&
      guessesCurrentValue.length &&
      guessesCurrentValue !== changes['guesses'].previousValue
    ) {
      const char = [...guessesCurrentValue].pop();
      this.checkGuess(char);
    }
  }

  checkGuess(letter: string) {
    let didWin = true;
    this.mistakesRemaining -= this.wasGuessAMistake(letter);
    for (let i = 0; i < this.answer.length; i++) {
      if (
        !this.guesses.find(
          (guess) => guess.toLowerCase() === this.answer[i].toLowerCase()
        )
      ) {
        didWin = false;
        break;
      }
    }
    this.success = didWin;
    if (this.success || this.mistakesRemaining === 0) {
      this.gameFinished.emit(this.success);
    }
  }

  wasGuessAMistake(letter: string) {
    for (let i = 0; i < this.answer.length; i++) {
      if (this.answer[i].toLowerCase() === letter.toLowerCase()) {
        return 0;
      }
    }
    return 1;
  }

}
