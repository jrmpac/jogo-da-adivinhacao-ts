export class Adivinhacao {
  numeroSecreto: number;
  mensagemNotificacao: string;

  constructor() {
    this.numeroSecreto = this.obterNumeroSecreto();
    this.mensagemNotificacao = '';
  }
  
  obterNumeroSecreto(): number {
    return Math.floor(Math.random() * 20) + 1;
  }

  avaliarPalpite(palpite: number): boolean {
    const jogadorAcertou: boolean = palpite == this.numeroSecreto;

    if (palpite < this.numeroSecreto)
      this.mensagemNotificacao = 'O número informado foi menor que o número secreto!';
    else if (palpite > this.numeroSecreto)
      this.mensagemNotificacao = 'O número informado foi maior que o número secreto!';
    else
      this.mensagemNotificacao = 'Você venceu! Parabéns!';

    return jogadorAcertou;
  }

  obterMensagemNotificacao(): string {
    return this.mensagemNotificacao;
  }
}