import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

    onSubmit(contactForm:any){
      console.log(contactForm.value);
    }

    countryList:country[] = [
      new country("1", "India"),
      new country("2", "USA"),
      new country("3", "England"),
    ];

    
}

export class country{
    id: string;
    name: string;

    constructor(id:string, name:string){
      this.id = id;
      this.name = name;
    }
}
