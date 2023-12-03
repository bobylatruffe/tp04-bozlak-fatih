import {Component, Input} from '@angular/core';
import {CataloguesModel, CataloguesService} from "../catalogues.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {
  @Input() catalogue!: CataloguesModel;

  constructor(private cataloguesService: CataloguesService) {

  }

  onCatalogueSelectionee() {
    this.cataloguesService.onCategorieSelectionnee(this.catalogue.titre);
  }
}
