import { Component } from '@angular/core';
import { iProduct } from '../../../models/product';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrl: './star-wars.component.scss'
})
export class StarWarsComponent {
  starWarsProducts: iProduct[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getProductsByCategory('Il Signore degli Anelli').subscribe(products => {
      this.starWarsProducts = products;
    });
  }
}
