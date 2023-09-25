import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/produtos');
  }

  insertData(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/addProduto', data);
  }

  deleteData(id: any) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteProduto/'+id);
  }

  getProdutoById(id: any) {
    return this.httpClient.get('http://127.0.0.1:8000/api/produtos/'+id);
  }

  updateData(id:any, data: any) {
    return this.httpClient.put('http://127.0.0.1:8000/api/updateProduto/'+id, data);
  }
}
