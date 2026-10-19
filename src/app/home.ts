import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="inicio">
      <div class="texto">
        <p class="etiqueta">FEITOS COM AMOR</p>

        <h2>Um cookie pode mudar seu dia!</h2>

        <p>
          Cookies deliciosos, feitos para adoçar
          seus melhores momentos.
        </p>

        <a class="botao" routerLink="/produtos">
          Conheça nossos sabores
        </a>
      </div>

      <img
        src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=700"
        alt="Cookies artesanais"
      >
    </section>

    <section class="mensagem">
      <h2>Feitos para adoçar seu dia!</h2>
      <p>Descubra o seu sabor favorito na RA Cookies.</p>
    </section>
  `,
})
export class Home {}
