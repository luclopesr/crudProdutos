import { Component } from '@angular/core';
import { Produto } from 'src/app/produto';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  produtos:any;
  produto = new Produto();

  constructor(private dataService:DataService) { }

  insertData() {
    this.dataService.insertData(this.produto).subscribe(res => {
      console.log(res);
    })
  }
}
