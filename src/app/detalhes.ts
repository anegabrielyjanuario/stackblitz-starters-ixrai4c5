import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProdutoService } from './services/produto.service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  template: `
    <section class="pagina">
      @if (produto) {
        <div class="detalhe">
          <img
            [src]="produto.imagem"
            [alt]="produto.nome"
          >

          <div>
            <p class="etiqueta">FEITO COM AMOR 🍪</p>

            <h1>{{ produto.nome }}</h1>

            <p>{{ produto.descricao }}</p>

            <h2>{{ produto.preco | currency:'BRL' }}</h2>

            <a class="botao" routerLink="/produtos">
              Voltar aos produtos
            </a>
          </div>
        </div>
      } @else {
        <h1>Produto não encontrado</h1>

        <p>Não encontramos esse sabor.</p>

        <a class="botao" routerLink="/produtos">
          Ver todos os produtos
        </a>
      }
    </section>
  `,
})
export class Detalhes {
  produto = this.servico.buscarPorId(
    Number(this.rota.snapshot.paramMap.get('id'))
  );

  constructor(private rota: ActivatedRoute, private servico: ProdutoService) {}
}
