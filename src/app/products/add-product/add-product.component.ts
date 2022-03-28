import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  // Reactive Form
  // addNewProduct = new FormGroup({
  //   product_name: new FormControl(''),
  //   product_category: new FormControl(''),
  //   product_description: new FormControl(''),
  // });

  onSubmit(){
    // console.warn(this.addNewProduct.value);
  }

  addNewProduct(form: any){
    // console.log(form.value);

    let newProduct = {
      id: 202,
      categoryId: form.value.product_id,
      name: form.value.product_name,
      descriptions: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      isAvailable: 1,
      reviews: form.value.product_reviews
    };
    console.log(newProduct);
    this.productService.createProduct(newProduct).subscribe(data => {
      console.log(data);
    })
  }

}
