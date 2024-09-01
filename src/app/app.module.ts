import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExplanationComponent } from './explanation/explanation.component';
import { QuizzComponent } from './quizz/quizz.component';
import { GameOverComponent } from './game-over/game-over.component';
import { CountdownComponent } from './countdown/countdown.component';
import { DoorsComponent } from './doors/doors.component';
import { HangmanComponent } from './hangman/hangman.component';
import { HangmanDisplayComponent } from './hangman-display/hangman-display.component';
import { HangmanKeyboardComponent } from './hangman-keyboard/hangman-keyboard.component';
import { HangmanQuestionComponent } from './hangman-question/hangman-question.component';
import { HappyBirthdayComponent } from './happy-birthday/happy-birthday.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExplanationComponent,
    QuizzComponent,
    GameOverComponent,
    CountdownComponent,
    DoorsComponent,
    HangmanComponent,
    HangmanDisplayComponent,
    HangmanKeyboardComponent,
    HangmanQuestionComponent,
    HappyBirthdayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
