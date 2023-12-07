import {ProduitModel} from "../../produits/produits.service";
import {Selector} from "@ngxs/store";
import {PanierState} from "./panier.state";

export interface PanierStateModel {
  produitsDansPanier: ProduitModel[];
  isConnected: boolean;
}

export class SelecteurPanier {
  @Selector([PanierState])
  static contenuPanier(state: PanierStateModel) {
    return state.produitsDansPanier;
  }

  @Selector([PanierState])
  static isConnected(state: PanierStateModel) {
    return state.isConnected;
  }
}
