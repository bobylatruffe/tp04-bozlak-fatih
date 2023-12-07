import {EventEmitter, Injectable, OnInit, Output} from "@angular/core";
import {SelecteurPanier} from "../header/panier/panier.model";
import {Observable} from "rxjs";
import {Select} from "@ngxs/store";
import {HttpClient} from "@angular/common/http";

export interface CataloguesModel {
  id: number,
  titre: string,
  description: string,
  imgPath: string
}

@Injectable()
export class CataloguesService {
  newItemsArrived: EventEmitter<any> = new EventEmitter<any>()

  isConnected: boolean = false;

  @Select(SelecteurPanier.isConnected)
  isConnected$: Observable<boolean> | undefined;

  currentCatalogue: string = "";

  cataloguesItems: CataloguesModel[] = [];

  categorieSelectionnee: EventEmitter<string> = new EventEmitter<string>();

  constructor(private http: HttpClient) {
    this.isConnected$?.subscribe((isConnected) => {
      this.isConnected = isConnected;

      if (this.isConnected) {
        this.http.get<CataloguesModel[]>('https://tp02-bozlak-fatih.onrender.com/api/catalogue').subscribe(data => {
          this.cataloguesItems = data;
          console.log(this.cataloguesItems)
          this.newItemsArrived.emit();
        })
      }
    })
  }

  estConnecte() {
    console.log(this.isConnected)
  }

  getCataloguesItems(): CataloguesModel[] {
    return this.cataloguesItems;
  }

  onCategorieSelectionnee(whichCategorie: string) {
    this.currentCatalogue = whichCategorie;
    this.categorieSelectionnee.emit(whichCategorie);
  }
}
