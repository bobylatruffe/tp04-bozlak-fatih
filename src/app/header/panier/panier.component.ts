import {Component, ElementRef, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ProduitModel} from "../../produits/produits.service";
import {SelecteurPanier} from "./panier.model";
import {Select} from "@ngxs/store";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
  produitsDansPanier: ProduitModel[] = [];

  @Select(SelecteurPanier.contenuPanier)
  produitsDansPanier$: Observable<ProduitModel[]> | undefined;
  nbProduitsDansPanier: number = -1;

  ngOnInit() {
    this.produitsDansPanier$?.subscribe((produits) => {
      this.produitsDansPanier = produits
      this.nbProduitsDansPanier++;
    })
  }

  afficherPanier(contenu: HTMLDivElement) {
    contenu.style.display = "block";
  }

  masquerPanier(contenu: HTMLDivElement) {
    contenu.style.display = "none"
  }
}
