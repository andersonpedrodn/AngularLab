import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  public profileForm = new FormGroup({
    name: new FormControl('Anderson Pedro do Nascimento'),
    myStacks: new FormGroup({
      front: new FormControl('Angular'),
      back: new FormControl('Spring'),
    }),
    myFavoriteFoods: new FormArray([
      new FormControl('X-tudo'),
    ]),

  });
  

  public update() {
    this.profileForm.patchValue({
      name: 'Pedro',
      myStacks: {
        front: "Vue",
        back: "Java",
      },

    });
  }

  public addMyFavoriteFoods(newFood: string){
    const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
    const addNewFood = new FormControl(newFood);

    myFavoriteFoods.push(addNewFood);
  }
}
