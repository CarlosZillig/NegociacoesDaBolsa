export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ) {
        let divisor = 1;
        let unidade = 'milisegundos'
        if(emSegundos) {
            divisor = 1000;
            unidade = 'segundos'
        }
        const tempoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            const t1 = performance.now();
            //método apply recebe um contexto, que faz com que o retorno nao perca a utilização do this.
            const retorno = tempoOriginal.apply(this, args)
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/divisor} ${unidade}.`)
            retorno
        }
        console.log(descriptor.value)
        return descriptor;
    }
}