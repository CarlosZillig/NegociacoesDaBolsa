export function inspecionar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`*MÈTODO* = ${propertyKey}`);
        console.log(`*PARAMETROS* = ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`*RETORNO* = ${JSON.stringify(retorno)}`);
    };
    return descriptor;
}
