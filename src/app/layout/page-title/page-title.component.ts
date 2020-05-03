import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/data/page';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  @Input() page:Page;

  constructor() {
   }

  ngOnInit() {
  }

}
