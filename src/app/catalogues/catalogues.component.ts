import {Component, OnInit} from '@angular/core';
import {CataloguesModel, CataloguesService} from "./catalogues.service";

@Component({
  selector: 'app-catalogues',
  templateUrl: './catalogues.component.html',
  styleUrl: './catalogues.component.css',
})
export class CataloguesComponent implements OnInit {
  cataloguesItems: CataloguesModel[] = [];

  constructor(private cataloguesServices: CataloguesService) {
  }

  ngOnInit() {
    this.cataloguesItems = this.cataloguesServices.getCataloguesItems();
  }
}
