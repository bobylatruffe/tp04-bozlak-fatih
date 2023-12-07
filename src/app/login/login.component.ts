import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpInterceptor} from "@angular/common/http";
import {ApiHttpInterceptor} from "../httpInterceptor";
import {Select, Store} from "@ngxs/store";
import {SelecteurIsConnected} from "../header/panier/panier.action";
import {Observable} from "rxjs";
import {ProduitModel} from "../produits/produits.service";
import {SelecteurPanier} from "../header/panier/panier.model";
import {CataloguesService} from "../catalogues/catalogues.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  isConnected: boolean = false;

  @Select(SelecteurPanier.isConnected)
  isConnected$: Observable<boolean> | undefined;

  constructor(private http: HttpClient,
              private store: Store,
              private catalogueService: CataloguesService) {

  }

  ngOnInit() {
    this.isConnected$?.subscribe((isConnected) => {
      this.isConnected = isConnected;
    })
  }

  login(login: string, password: string) {
    const body = {login: login, password: password};
    this.http.post('https://tp02-bozlak-fatih.onrender.com/api/login/', body, {observe: "response"}).subscribe(
      response => {
        console.log(response.status);
        console.log(response.body);
      },
      error => {
        alert(error.error.message);
      }
    )
  }
}
