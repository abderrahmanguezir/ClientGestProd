import { Component , OnInit } from '@angular/core';
import {ProduitMockService} from './produit.mock.service';
import {Produit} from '../shareed/Produit';
import { FormGroup,FormBuilder,Validators,FormsModule} from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class produitComponent implements OnInit{
      produits : Produit[];

      produitForm: FormGroup;

      constructor(private produitService : ProduitMockService,private fb :FormBuilder){
          this.produitForm= this.fb.group({
            ref :['' ,Validators.required],
            quantite :'',
            prixU :''
          });
      }


      ngOnInit(){
        this.produits = this.produitService.getProduits();
      }
}
