import {Component, Input} from '@angular/core';
import {ProduitModel, ProduitsService} from "../produits.service";
import {Store} from "@ngxs/store";
import {AjouterAuPanier} from "../../header/panier/panier.action";
import {CataloguesService} from "../../catalogues/catalogues.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  @Input() produit: any;

  constructor(private store: Store,
              private cataloguesService: CataloguesService,
              private produitsSerices: ProduitsService) {
  }

  ajouterAuPanier() {
    this.store.dispatch(new AjouterAuPanier(this.produit));
    this.produitsSerices.setProduits(this.cataloguesService.currentCatalogue, this.produit);
    this.produitsSerices.produitsUpdate.emit(null);
  }
}
