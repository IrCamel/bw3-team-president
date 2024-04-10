import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProduct } from '../../models/product';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProductsByCategory(category: string): Observable<iProduct[]> {
    return this.http.get<iProduct[]>(`${this.apiUrl}/product`).pipe(
      map(products => products.filter(product => product.category === category))
    );
  }
}
