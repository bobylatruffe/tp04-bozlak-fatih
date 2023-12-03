import {Component, Input} from '@angular/core';
import {ProduitModel} from "../produits.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  @Input() produit: any;
}
