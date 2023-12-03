import {ProduitModel} from "../../produits/produits.service";
import {Selector} from "@ngxs/store";
import {PanierState} from "./panier.state";

export interface PanierStateModel {
  produitsDansPanier: ProduitModel[];
}

export class SelecteurPanier {
  @Selector([PanierState])
  static contenuPanier(state: PanierStateModel) {
    return state.produitsDansPanier;
  }
}
