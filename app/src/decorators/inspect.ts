export function inspecionar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: Array<any>) {
        console.log(`*MÈTODO* = ${propertyKey}`)
        console.log(`*PARAMETROS* = ${JSON.stringify(args)}`)
        const retorno = metodoOriginal.apply(this, args)
        console.log(`*RETORNO* = ${JSON.stringify(retorno)}`)
    }
    return descriptor;
}
    
