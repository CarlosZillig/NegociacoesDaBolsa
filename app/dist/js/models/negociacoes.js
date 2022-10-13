export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        console.log(JSON.stringify(this.negociacoes, null, 2));
    }
    eIgual(negociacoes) {
        return JSON.stringify(this.negociacoes) === negociacoes.lista().join();
    }
}
