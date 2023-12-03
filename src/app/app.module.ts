import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CatalogueComponent} from './catalogues/catalogue/catalogue.component';
import {NgOptimizedImage} from "@angular/common";
import {CataloguesComponent} from './catalogues/catalogues.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ProduitsComponent} from './produits/produits.component';
import {ProduitComponent} from './produits/produit/produit.component';
import {PanierComponent} from './header/panier/panier.component';
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {PanierState} from "./header/panier/panier.state";

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    CataloguesComponent,
    HeaderComponent,
    FooterComponent,
    ProduitsComponent,
    ProduitComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    NgxsModule.forRoot([PanierState]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
