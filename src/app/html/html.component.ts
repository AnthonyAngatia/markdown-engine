import { Component, OnInit, Input } from '@angular/core';
import { FileX } from '../file';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit {

  @Input() file!: FileX;
  constructor() { }

  ngOnInit(): void {
    // this.markdownText = "## Test"
    console.log(this.file.text)
  }



}
