import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {

  constructor() { }

  openDialog() {
    alert('Вопрос передали в поддержку, мы свяжемся с вами в ближайшее время')
  }

}
