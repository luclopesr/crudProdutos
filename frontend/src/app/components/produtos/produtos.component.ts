import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Produto } from 'src/app/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  produtos:any;
  produto = new Produto();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getProdutosData();
  }

  getProdutosData() {
    this.dataService.getData().subscribe(res => {
      this.produtos = res;
    });
  }

  insertData() {
    this.dataService.insertData(this.produto).subscribe(res => {
      this.getProdutosData();
    })
  }
}
