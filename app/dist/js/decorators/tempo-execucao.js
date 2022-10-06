export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        let divisor = 1;
        let unidade = 'milisegundos';
        if (emSegundos) {
            divisor = 1000;
            unidade = 'segundos';
        }
        const tempoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = tempoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}.`);
            retorno;
        };
        console.log(descriptor.value);
        return descriptor;
    };
}
