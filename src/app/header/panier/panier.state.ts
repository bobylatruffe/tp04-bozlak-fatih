import {Action, State, StateContext} from "@ngxs/store";
import {PanierStateModel} from "./panier.model";
import {AjouterAuPanier} from "./panier.action";
import {Injectable} from "@angular/core";

@State<PanierStateModel>({
  name: "panier",
  defaults: {
    produitsDansPanier: []
  }
})

@Injectable()
export class PanierState {
  @Action(AjouterAuPanier)
  ajouterAUPanier(ctx: StateContext<PanierStateModel>, action: AjouterAuPanier) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      produitsDansPanier: [...state.produitsDansPanier, action.produitAAjoutee]
    })
  }
}
