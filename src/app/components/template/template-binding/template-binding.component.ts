import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'TRE-RN'
  public age = 90;
  public condition = this.age > 1 ? 'Idade maior que 1' : 'Idade menor que 1'
  public isDisabled = false;
  public srcValue = 'https://www.tre-rn.jus.br/imagens/fotos/fachada-do-tre-rn-na-cor-verde/@@images/5d597c63-e2e8-458d-b91e-00f2a37c9fbc.jpeg'
  public isTextDecoration = this.age >= 90 ? 'underline' : 'none';
  /*constructor(){
    setTimeout(() => {
      this.name = "João e Maria"
    },1000 );
  }*/
  
  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }


  public onKeyDown(event: Event) {
    return console.log(event)
  }

  public onMouseMove(event: MouseEvent) {
    return console.log(event)
  }
}
