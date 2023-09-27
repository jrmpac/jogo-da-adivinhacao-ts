export class Adivinhacao {
    constructor() {
        this.numeroSecreto = this.obterNumeroSecreto();
        this.mensagemNotificacao = '';
    }
    obterNumeroSecreto() {
        return Math.floor(Math.random() * 20) + 1;
    }
    avaliarPalpite(palpite) {
        const jogadorAcertou = palpite == this.numeroSecreto;
        if (palpite < this.numeroSecreto)
            this.mensagemNotificacao = 'O número informado foi menor que o número secreto!';
        else if (palpite > this.numeroSecreto)
            this.mensagemNotificacao = 'O número informado foi maior que o número secreto!';
        else
            this.mensagemNotificacao = 'Você venceu! Parabéns!';
        return jogadorAcertou;
    }
    obterMensagemNotificacao() {
        return this.mensagemNotificacao;
    }
}
