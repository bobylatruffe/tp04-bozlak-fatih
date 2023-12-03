import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogues/catalogue/catalogue.component';
import {NgOptimizedImage} from "@angular/common";
import { CataloguesComponent } from './catalogues/catalogues.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitComponent } from './produits/produit/produit.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    CataloguesComponent,
    HeaderComponent,
    FooterComponent,
    ProduitsComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
