import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-hangman-question',
  templateUrl: './hangman-question.component.html',
  styleUrls: ['./hangman-question.component.css'],
})
export class HangmanQuestionComponent implements OnInit, OnChanges {
  @Input() answer: string = '';
  @Input() guesses: string[] = [];
  characters: { value: string; guessed: boolean }[] = [];
  constructor() {}

  ngOnInit(): void {
    this.characters = this.answer
        .split('')
        .map((char) => ({ value: char, guessed: false }));
  }

  ngOnChanges(changes: SimpleChanges): void {
    const guessesCurrentValue = changes?.['guesses']?.currentValue;
    if (
      guessesCurrentValue &&
      guessesCurrentValue.length &&
      guessesCurrentValue !== changes['guesses'].previousValue
    ) {
      const guessedChar = [...changes['guesses'].currentValue].pop();
      this.characters = this.characters.map((char) => {
        if (char.value.toLowerCase() === guessedChar.toLowerCase()) {
          return { ...char, guessed: true };
        }
        return char;
      });
    }
  }
}