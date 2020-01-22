import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from 'src/app/shared/product-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {

  constructor(private service:ProductDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      id :0,
      name :'',
      price : 0,
      description :''
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.id==0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postProductDetail().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.success('submitted successfully', 'Product added');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form:NgForm){
    this.service.putProductDetail().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.info('submitted successfully', 'Product updated');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
