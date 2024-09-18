import { AsyncPipe, CommonModule, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, registerLocaleData, UpperCasePipe } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';

import { Observable, delay, of } from 'rxjs';
import { CustomStringPipe } from '../../../pipes/custom-string.pipe';


@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [CommonModule, DatePipe, UpperCasePipe, LowerCasePipe, JsonPipe, AsyncPipe, CurrencyPipe, DecimalPipe, PercentPipe, CustomStringPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
  
})
export class AngularPipesComponent {
  someText = "TESTANDO PIPE OPERATOR";
  today = new Date();
}
