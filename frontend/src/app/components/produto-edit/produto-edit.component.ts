import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/produto';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent {
  id:any;
  data:any
  produto = new Produto();

  constructor(private route:ActivatedRoute, private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getProdutoById(this.id).subscribe(res => {
      // console.log(res);
      this.data = res;
      this.produto = this.data;
    })
  }

  updateProduto() {
    this.dataService.updateData(this.id, this.produto).subscribe(res => {
      this.router.navigate(['/']);
    })
  }
}
