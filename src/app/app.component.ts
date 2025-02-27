import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IndexComponent],
  template: `
    <app-index />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kaio Quaresma de Souza';
}
