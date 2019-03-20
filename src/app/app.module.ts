import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {produitComponent} from './produit/produit.component';
import {ProduitMockService} from './produit/produit.mock.service';

@NgModule({
  declarations: [
    AppComponent,
    produitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProduitMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
