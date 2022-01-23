import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit {

  @Input() markdownText!: string;
  constructor() { }

  ngOnInit(): void {
  }


}
