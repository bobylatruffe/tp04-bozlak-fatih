import {Component, OnInit} from '@angular/core';
import {CataloguesService} from "../catalogues/catalogues.service";
import {ProduitModel, ProduitsService} from "./produits.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {
  produits: ProduitModel[] = []

  constructor(private cataloguesService: CataloguesService,
              private produitsService: ProduitsService) {
  }

  ngOnInit() {
    this.cataloguesService.categorieSelectionnee.subscribe((typeCategorie) => {
      this.produits = this.produitsService.getProduits(typeCategorie);
    });
  }
}
