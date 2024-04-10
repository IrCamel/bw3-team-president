import { Component } from '@angular/core';
import { iProduct } from '../../../models/product';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-harry-potter',
  templateUrl: './harry-potter.component.html',
  styleUrl: './harry-potter.component.scss'
})
export class HarryPotterComponent {
  harryPotterProducts: iProduct[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getProductsByCategory('Harry Potter').subscribe(products => {
      this.harryPotterProducts = products;
    });
  }
}
