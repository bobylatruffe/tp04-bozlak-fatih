import { Component } from '@angular/core';
import {CataloguesService} from "./catalogues/catalogues.service";
import {ProduitsService} from "./produits/produits.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CataloguesService, ProduitsService]
})
export class AppComponent {

}
