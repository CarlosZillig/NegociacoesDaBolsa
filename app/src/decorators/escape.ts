export function escapar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: Array<any>) {
        let retorno =  metodoOriginal.apply(this, args)
        if (typeof retorno === 'string') {
            console.log(`Escape ativado na classe ${this.constructor.name} no metodo ${propertyKey}`)
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    }
    return descriptor;
}