import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from 'src/app/shared/product-detail.service';
import { ProductsComponent } from 'src/app/products/products.component';
import { ProductDetail } from 'src/app/shared/product-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styles: ['./one-product.components.css']
})
export class OneProductComponent implements OnInit {

  constructor(private service: ProductDetailService, private toastr: ToastrService) { }
  //product : ProductDetail;
  ngOnInit() {
  }

}
