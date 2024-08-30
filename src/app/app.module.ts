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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExplanationComponent,
    QuizzComponent,
    GameOverComponent,
    CountdownComponent,
    DoorsComponent,
    HangmanComponent
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
