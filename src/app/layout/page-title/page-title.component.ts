import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  @Input() title:string;
  @Input() description:string;
  @Input() icon:string;

  constructor() {
   }

  ngOnInit() {
  }

}