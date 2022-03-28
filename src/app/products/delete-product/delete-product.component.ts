import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productId = 0;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data['id']; //Capture Id of product that is going to be deleted

      this.productService.deleteProduct(this.productId).subscribe(deletedData => {
        console.log(`Product has been deleted ${deletedData}`);
      })

    })
  }

}
