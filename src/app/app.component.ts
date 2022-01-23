import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mark-down';
  markdownString:string = "# Testing"

  markdownTextForm = this.formBuilder.group({
    text: '',
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(){
    console.warn('Your order has been submitted', this.markdownTextForm.value);
    this.markdownTextForm.reset();
  }

  onClear(){
    this.markdownTextForm.reset();
  }

  onTextChange(input:any){
    console.log(input.value)
  }


}


