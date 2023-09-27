import { Adivinhacao } from "./adivinhacao.js";

class TelaAdivinhacao {
  pnlConteudo: HTMLDivElement;
  txtChute: HTMLInputElement;
  btnAvaliar: HTMLButtonElement;
  btnTentarNovamente: HTMLButtonElement;
  jogo: Adivinhacao;

  constructor() {
    this.registrarElementos();
    this.registarEventos();

    this.jogo = new Adivinhacao();
  }

  registrarElementos(): void {
    this.pnlConteudo = 
      document.getElementById('pnlConteudo') as HTMLDivElement;

    this.txtChute = 
      document.getElementById('txtChute') as HTMLInputElement;

    this.btnAvaliar = 
      document.getElementById('btnAvaliar') as HTMLButtonElement;

    this.btnTentarNovamente = 
      document.getElementById('btnTentarNovamente') as HTMLButtonElement;
  }

  registarEventos(): void {
    this.btnAvaliar.addEventListener('click', () => this.avaliarChute());

    this.btnTentarNovamente.addEventListener('click', () => this.reiniciarJogo());
  }

  avaliarChute(): void {
    const palpite: number = parseInt(this.txtChute.value);

    const jogadorAcertou: boolean = this.jogo.avaliarPalpite(palpite);
    
    if (jogadorAcertou)
      this.btnAvaliar.disabled = true;

    const mensagem = this.jogo.obterMensagemNotificacao();

    this.exibirNotificacao(mensagem, jogadorAcertou);
  }

  reiniciarJogo(): void {
    this.limparNotificacao();
    
    this.btnAvaliar.disabled = false;
    this.txtChute.value = '';

    this.jogo = new Adivinhacao();
  }

  exibirNotificacao(mensagem: string, jogadorAcertou: boolean): void {
    const txtNotificacao = document.createElement('p');

    txtNotificacao.textContent = mensagem;

    this.classificarNotificacao(jogadorAcertou, txtNotificacao);

    this.limparNotificacao();

    this.pnlConteudo.appendChild(txtNotificacao);
  }

  classificarNotificacao(jogadorAcertou: boolean, elemento: HTMLParagraphElement): void {
    if(jogadorAcertou) {
      elemento.classList.add('notificacao-acerto');
      return;
    }
    elemento.classList.add('notificacao-erro');
  }

  limparNotificacao() {
    this.pnlConteudo.querySelector('p')?.remove();
  }

  obterNumeroSecreto() : number {
    return Math.floor(Math.random() * 20) + 1;
  }
  
}

window.addEventListener('load', () => new TelaAdivinhacao());