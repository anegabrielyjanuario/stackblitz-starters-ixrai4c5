import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProdutoService } from './services/produto.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  template: `
    <section class="pagina">
      <h1>Nossos Cookies 🍪</h1>

      <p class="subtitulo">
        Três sabores especiais feitos para você!
      </p>

      <div class="lista-produtos">
        @for (produto of produtos; track produto.id) {
          <div class="cartao">
            <img
              [src]="produto.imagem"
              [alt]="produto.nome"
            >

            <h2>{{ produto.nome }}</h2>

            <p>{{ produto.descricao }}</p>

            <strong>
              {{ produto.preco | currency:'BRL' }}
            </strong>

            <a
              class="botao"
              [routerLink]="['/produto', produto.id]"
            >
              Ver detalhes
            </a>
          </div>
        }
      </div>
    </section>
  `,
})
export class Produtos {
  produtos = this.servico.listar();

  constructor(private servico: ProdutoService) {}
}
