import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FileX } from './file';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mark-down';
  markdownString:string = "# Testing"
  file: FileX = {
    id: 1,
    title:"Tilte",
    text:"Text initilization is important"
  }



  markdownTextForm = this.formBuilder.group({
    text: '',
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(){
    console.warn('submitted', this.markdownTextForm.value);
    this.file.text = this.markdownTextForm.value
    this.file = {
      id: 1,
    title:"Tilte",
    text:this.markdownTextForm.value.text
    }
    // this.markdownTextForm.reset();
  }

  onClear(){
    this.markdownTextForm.reset();
  }

  onTextChange(input:any){
    // console.log(input.value)
  }


}


