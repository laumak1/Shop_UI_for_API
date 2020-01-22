import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../shared/product-detail.service';
import { ToastrService } from 'ngx-toastr';
import { ProductDetail } from '../shared/product-detail.model';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ProductDetailListComponent } from '../product-details/product-detail-list/product-detail-list.component';
import { OneProductComponent } from '../product-details/one-product/one-product.component';
import { ProductDetailComponent } from '../product-details/product-detail/product-detail.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  constructor(private service: ProductDetailService, private toastr: ToastrService,
    private dialog: MatDialog) { }

  product : ProductDetail;
  ngOnInit() {
    this.service.refreshList();
  }

  getProduct(id){
    this.service.getProduct(id);
    //this.product = this.service.product;
    /*this.service.getProduct(id).subscribe(
      res => {
        this.product = res as ProductDetail;
      },
      err => {
        console.log(err);
      }
    )*/
    
  }

  onGetProduct(id){
    this.getProduct(id);
    //this.service.refreshList();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "50%";
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    this.dialog.open(OneProductComponent, dialogConfig);
  }

  openDialog(){
    this.dialog.open(OneProductComponent);
  }

}
