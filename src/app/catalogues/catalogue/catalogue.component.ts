import {Component, Input} from '@angular/core';
import {CataloguesModel} from "../catalogues.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {
  @Input() catalogue!: CataloguesModel;
}
