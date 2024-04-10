import { Component } from '@angular/core';
import { iProduct } from '../../../models/product';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrl: './marvel.component.scss'
})
export class MarvelComponent {
  marvelProducts: iProduct[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getProductsByCategory('Marvel').subscribe(products => {
      this.marvelProducts = products;
    });
  }
}
