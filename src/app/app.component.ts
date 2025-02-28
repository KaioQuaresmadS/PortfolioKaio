import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { HttpClient } from '@angular/common/http';


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
export class ImagemService {
  constructor(private http: HttpClient) {}
  
  getImagem(id: number){
    return this.http.get(`https://localhost:5000/api/imagens/${id}`)
  }
}
