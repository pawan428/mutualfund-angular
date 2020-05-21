import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'src/app/models/page';

@Component({
  selector: 'app-scheme-details',
  templateUrl: './scheme-details.component.html',
  styleUrls: ['./scheme-details.component.css']
})
export class SchemeDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.setPageTitle();
  }
  ngOnInit() {
  }
  setPageTitle() {
    let page = new Page();
    this.route.params.subscribe(param => {
      page.title = "Scheme Details";
      page.heading = param["name"].replace(/-/g, ' ').toUpperCase();
      //get more about this scheme from API.
      page.description = "Equity Schemes";
      page.icon="pe-7s-wallet icon-gradient bg-plum-plate";
      localStorage.setItem('page', JSON.stringify(page));
    });
  }
}
