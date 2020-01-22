import { Injectable } from '@angular/core';
import { ProductDetail } from './product-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  formData:ProductDetail
  readonly BaseURI = 'https://localhost:44388';
  list : ProductDetail[];
  product : ProductDetail;
  constructor(private http:HttpClient) { }

  postProductDetail(){
    return this.http.post(this.BaseURI+"/api/Products" ,this.formData)
  }


  putProductDetail(){
    return this.http.put(this.BaseURI+"/api/Products/"+this.formData.id ,this.formData)
  }

  deleteProductDetail(id){
    return this.http.delete(this.BaseURI+"/api/Products/"+id)
  }

  refreshList(){
    this.http.get(this.BaseURI+"/api/Products").toPromise().then(res => this.list = res as ProductDetail[]);
  }

  getProduct(id){
    this.http.get(this.BaseURI+"/api/Products/"+id).toPromise().then(res => this.product = res as ProductDetail);
    console.log('kazkassss');
    console.log(this.product);
  }
}
