import { Injectable } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: Produto[] = [
    {
      id: 1,
      nome: 'Cookie de Pistache',
      descricao: 'Cookie macio com pistache e chocolate branco.',
      preco: 17,
      imagem:
        'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600',
    },
    {
      id: 2,
      nome: 'Cookie de Chocolate',
      descricao: 'Uma delícia com muito chocolate.',
      preco: 12,
      imagem: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600',
    },
    {
      id: 3,
      nome: 'Caramelo Crocante',
      descricao: 'Cookie com caramelo e pedaços crocantes.',
      preco: 15,
      imagem:
        'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600',
    },
  ];

  listar(): Produto[] {
    return this.produtos;
  }

  buscarPorId(id: number): Produto | undefined {
    return this.produtos.find((produto) => produto.id === id);
  }
}
