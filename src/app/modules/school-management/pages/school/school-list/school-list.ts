import { Component } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
  selector: 'app-school-list',
  imports: [TableModule, CommonModule],
  providers: [ProductService],
  templateUrl: './school-list.html',
  styleUrl: './school-list.css'
})
export class SchoolList {
    products!: Product[];

    cols!: Column[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data:any) => {
            this.products = data;
        });

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
    }
}
