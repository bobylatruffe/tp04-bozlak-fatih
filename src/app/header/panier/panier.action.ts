import {ProduitModel} from "../../produits/produits.service";
import {Selector} from "@ngxs/store";
import {PanierState} from "./panier.state";
import {PanierStateModel} from "./panier.model";

export class AjouterAuPanier {
  static readonly type = "[Panier] Aujouter au panier";

  constructor(public produitAAjoutee: ProduitModel) {
  }
}

export class MettreAJourIsConnected {
  static readonly type = "[Login] Changer le status de login";

  constructor(public isConnected: boolean) {
  }
}

export class SelecteursDuPanier {
  static readonly type = "[Panier] Contenu du panier";
}

export class SelecteurIsConnected {
  static readonly type = "[Login] isConnected ?";
}
