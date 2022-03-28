import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId = 0;
  productDetails: Product | any;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data['id'];
      
      this.productService.viewProduct(this.productId).subscribe(productData => {
        this.productDetails = productData; // Get Existing Data of the Product
        console.log(this.productDetails);
      })
    });
  }

  updateProduct(form: any){
    console.log(form.value);

    const updateProduct = {
      id: form.value.id,
      categoryId: form.value.product_id,
      name: form.value.product_name,
      descriptions: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      isAvailable: 1,
      reviews: form.value.product_reviews
    };
    console.log(updateProduct);
    this.productService.updateProduct(this.productId, updateProduct).subscribe(data => {
      console.log(data);
    })
  }

}
