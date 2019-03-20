import { Component , OnInit } from '@angular/core';
import {ProduitMockService} from './produit.mock.service';
import {Produit} from '../shareed/Produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class produitComponent implements OnInit{
      produits : Produit[];

      constructor(private produitService : ProduitMockService){

      }


      ngOnInit(){
        this.produits = this.produitService.getProduits();
      }
}
