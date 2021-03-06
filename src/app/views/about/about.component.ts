import { Component, OnInit } from '@angular/core';
import { SeoService } from "../../services/seo.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'About Title',
      description: 'About Description'
    })
  }

}
