import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent],
  styles: [`h1 { color:green;}`,],
  template: `
  <!--router-outlet></router-outlet> -->
  <!--<app-new-component/> -->
  <h1>TRE-RN</h1>
  <app-template-binding />
  <app-template-variables />
  <app-template-control-flow />
  `,
  
})
export class AppComponent {
  
}

