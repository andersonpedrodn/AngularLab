import { CommonModule, DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss'
})
export class AngularPipesComponent {
  someText = "TESTANDO PIPE OPERATOR";
  today = new Date();
}
