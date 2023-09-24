import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  produtos:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getProdutosData();
  }

  getProdutosData() {
    this.dataService.getData().subscribe(res => {
      this.produtos = res;
      
    });
  }
}
