import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CarrosselProdutosComponent } from '../carrossel-produtos/carrossel-produtos.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarrosselProdutosComponent, FooterComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
