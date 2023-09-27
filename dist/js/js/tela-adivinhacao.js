import { Adivinhacao } from "./adivinhacao.js";
class TelaAdivinhacao {
    constructor() {
        this.registrarElementos();
        this.registarEventos();
        this.jogo = new Adivinhacao();
    }
    registrarElementos() {
        this.pnlConteudo =
            document.getElementById('pnlConteudo');
        this.txtChute =
            document.getElementById('txtChute');
        this.btnAvaliar =
            document.getElementById('btnAvaliar');
        this.btnTentarNovamente =
            document.getElementById('btnTentarNovamente');
    }
    registarEventos() {
        this.btnAvaliar.addEventListener('click', () => this.avaliarChute());
        this.btnTentarNovamente.addEventListener('click', () => this.reiniciarJogo());
    }
    avaliarChute() {
        const palpite = parseInt(this.txtChute.value);
        const jogadorAcertou = this.jogo.avaliarPalpite(palpite);
        if (jogadorAcertou)
            this.btnAvaliar.disabled = true;
        const mensagem = this.jogo.obterMensagemNotificacao();
        this.exibirNotificacao(mensagem, jogadorAcertou);
    }
    reiniciarJogo() {
        this.limparNotificacao();
        this.btnAvaliar.disabled = false;
        this.txtChute.value = '';
        this.jogo = new Adivinhacao();
    }
    exibirNotificacao(mensagem, jogadorAcertou) {
        const txtNotificacao = document.createElement('p');
        txtNotificacao.textContent = mensagem;
        this.classificarNotificacao(jogadorAcertou, txtNotificacao);
        this.limparNotificacao();
        this.pnlConteudo.appendChild(txtNotificacao);
    }
    classificarNotificacao(jogadorAcertou, elemento) {
        if (jogadorAcertou) {
            elemento.classList.add('notificacao-acerto');
            return;
        }
        elemento.classList.add('notificacao-erro');
    }
    limparNotificacao() {
        var _a;
        (_a = this.pnlConteudo.querySelector('p')) === null || _a === void 0 ? void 0 : _a.remove();
    }
    obterNumeroSecreto() {
        return Math.floor(Math.random() * 20) + 1;
    }
}
window.addEventListener('load', () => new TelaAdivinhacao());
