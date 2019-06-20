import { Component } from '@angular/core';

@Component({
  selector: 'another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent {
  title = 'Another';
  subtitle = 'Component';
  animals: string[] = ['dog', 'cat', 'horse'];

  removeAnimal(animal:string) {
    for (let i=0; i<this.animals.length; i++) {
        if (animal == this.animals[i]) {
            this.animals.splice(i,1);
        }
    }
  } 
}
