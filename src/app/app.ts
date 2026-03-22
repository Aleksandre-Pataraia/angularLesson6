import { Component, signal } from '@angular/core';
import { Counter } from "./counter/counter";

type Answer = {
  answer: string,
  correct: boolean
}

@Component({
  selector: 'app-root',
  imports: [Counter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})



export class App {
  answer1: Answer = {answer: "Great!", correct: false};
  answer2: Answer = {answer: "Fine", correct: true};
  answer3: Answer = {answer: "Normal", correct: false};
  answer4: Answer = {answer: "I wanna kms", correct: false};

  constructor(){
    let formEl = document.getElementById("formElement")

    formEl?.addEventListener("click", function(event){
      event.preventDefault();

      function(e: Answer): void{
        if (e.correct){
          alert("success")
        } else if(!e.correct){
          alert("wrong")
        } else {
          alert("pick an answer first")
        }
      }
    })
  }
  
}
