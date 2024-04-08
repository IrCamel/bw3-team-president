import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'presidentProject';

  constructor(private renderer: Renderer2){
    this.renderer.setStyle(document.body, 'background-color', '#871101');
  }
}
