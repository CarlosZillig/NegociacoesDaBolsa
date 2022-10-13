import { Negociacao } from "../models/negociacao.js"

export function imprimir(...objetos: Array<Negociacao>) {
    objetos.forEach(objeto => {
        console.log(objeto.paraTexto())
    })
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       