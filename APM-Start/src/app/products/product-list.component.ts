
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product-service';

@Component({
  templateUrl:'./product-list.component.html',
  styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string  = 'Product List';
  imageWidth:number = 50;
  imageMargin:number = 2;
  showImage: boolean = false;
  _listFilter: string;
  errorMessage:string;

  get listFilter(): string{
      return this._listFilter;
  }

  set listFilter(value:string){
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  constructor(private _productService: ProductService){
    this.listFilter = '';
}

  filteredProducts : IProduct[];
  products : IProduct[];
 

  toggleImage() : void
  {
    this.showImage = !this.showImage;
  }

  ngOnInit() : void
  {
    this._productService.getProducts()
             .subscribe(products => {
               this.products = products;
               this.filteredProducts = this.products;
              }, 
              error => this.errorMessage = <any>error);
  }

  performFilter(filterby:string) :IProduct[]{
     filterby = filterby.toLowerCase();
     return this.products.filter((product:IProduct) =>
     product.productName.toLocaleLowerCase().indexOf(filterby) !== -1 );
  }

  onRatingClicked(message: number) :void {
     this.pageTitle = 'Product List: ' + message;
  }
}