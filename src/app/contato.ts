import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="pagina contato">
      <p class="etiqueta">FALE COM A GENTE</p>
      <h1>Entre em contato!</h1>
      <p>Envie sua dúvida, sugestão ou mensagem para a RA Cookies.</p>

      <form class="caixa-contato" (ngSubmit)="enviar()">
        <label for="nome">Seu nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          [(ngModel)]="nome"
          placeholder="Digite seu nome"
          required
        >

        <label for="email">Seu e-mail</label>
        <input
          id="email"
          type="email"
          name="email"
          [(ngModel)]="email"
          placeholder="Digite seu e-mail"
          required
        >

        <label for="assunto">Assunto</label>
        <input
          id="assunto"
          type="text"
          name="assunto"
          [(ngModel)]="assunto"
          placeholder="Sobre o que deseja falar?"
          required
        >

        <label for="mensagem">Sua mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          [(ngModel)]="mensagem"
          placeholder="Escreva sua mensagem aqui..."
          rows="5"
          required
        ></textarea>

        <button class="botao" type="submit">
          Enviar mensagem
        </button>

        @if (enviado) {
          <p class="sucesso">
            Mensagem preenchida com sucesso! 🍪
          </p>
        }
      </form>
    </section>
  `
})
export class Contato {
  nome = '';
  email = '';
  assunto = '';
  mensagem = '';
  enviado = false;

  enviar() {
    this.enviado = true;
  }
}