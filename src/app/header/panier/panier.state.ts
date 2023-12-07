import {Action, State, StateContext} from "@ngxs/store";
import {PanierStateModel} from "./panier.model";
import {AjouterAuPanier, MettreAJourIsConnected} from "./panier.action";
import {Injectable} from "@angular/core";

@State<PanierStateModel>({
  name: "panier",
  defaults: {
    produitsDansPanier: [],
    isConnected: false
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

  @Action(MettreAJourIsConnected)
  mettreAJour(ctx: StateContext<PanierStateModel>, action: MettreAJourIsConnected) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isConnected: action.isConnected
    })
  }
}
