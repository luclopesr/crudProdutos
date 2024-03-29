import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProdutoEditComponent } from './components/produto-edit/produto-edit.component';


const appRoutes: Routes = [
  { path: '', component:ProdutosComponent},
  { path: 'edit/:id', component:ProdutoEditComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    HeaderComponent,
    FooterComponent,
    ProdutoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
