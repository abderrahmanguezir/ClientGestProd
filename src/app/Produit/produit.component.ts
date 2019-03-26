import { Component , OnInit } from '@angular/core';
import {ProduitService} from './produit.service';
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
      operation :string='add';
      selectedProduit: Produit;

      constructor(private produitService : ProduitService,private fb :FormBuilder){
          this.createForm();
      }


      ngOnInit(){
        this.loadProduit();
        this.initProduit();

      }

      createForm(){
        this.produitForm = this.fb.group({
          ref:['',Validators.required],
          quantite :'',
          prixUnitaire :''
        });
      }

      loadProduit(){
        this.produitService.getProduits().subscribe(
          data =>{this.produits =  data;
          console.log(data);},
          error  =>{console.log('erreur')},

          ()=>{console.log('Chargement effectuer')}
        );
      }

      addProduit(){
        const p= this.produitForm.value;
        this.produitService.addProduit(p).subscribe(
          res => {
            this.initProduit();
            this.loadProduit();
          }
        );
      }

      updateProduit(){
        this.produitService.updateProduit(this.selectedProduit).subscribe(
          res => {
            this.initProduit();
            this.loadProduit();
          }
        );
      }

      initProduit(){
        this.selectedProduit = new Produit();
        this.createForm();
      }

      deleteProduit()
      {
        this.produitService.deleteProduit(this.selectedProduit.ref).subscribe(
          ref =>{
            this.selectedProduit =new Produit();
            this.loadProduit();
          }
        );
      }
}
