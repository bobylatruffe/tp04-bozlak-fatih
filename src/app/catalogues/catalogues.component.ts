import {Component, OnInit} from '@angular/core';
import {CataloguesModel, CataloguesService} from "./catalogues.service";
import {HttpInterceptor} from "@angular/common/http";

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
    this.cataloguesServices.newItemsArrived.subscribe(() => {
      this.cataloguesItems = this.cataloguesServices.getCataloguesItems();
    })
  }

  newItemsArrived() {
    this.cataloguesItems = this.cataloguesServices.getCataloguesItems();
  }
}
