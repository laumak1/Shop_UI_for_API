import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from 'src/app/shared/product-detail.service';
import { ProductDetail } from 'src/app/shared/product-detail.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-detail-list',
  templateUrl: './product-detail-list.component.html',
  styles: []
})
export class ProductDetailListComponent implements OnInit {

  constructor(private service: ProductDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd:ProductDetail){
    this.service.formData = Object.assign({}, pd);
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

  onDelete(id){
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteProductDetail(id).subscribe(
        res =>{
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Deleted')
          this.resetForm();
        },
        err => {
          console.log(err);
        }
      )
    }
  }

  getProduct(id){

  }

}
