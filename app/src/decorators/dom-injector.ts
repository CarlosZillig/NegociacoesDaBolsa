export function domInjector(seletor: string) {
    return function(
        target: any,
        propertyKey: string
    ) {
        /*Criando um "Loop" para verificar se o elemento ja foi atribuido,
        toda vez que o getter for chamado, ele vai atribuir o seletor passado a nossa variavel elemento. Assim,
        ela sempre guardara o ultimo valor passado, e evitara que o codigo repita as atribuições *cache*
        */
        let elemento = HTMLElement;
        const getter = function() {
            if(!elemento) {
                const elemento = document.querySelector(seletor)
                console.log(`Buscando elemento no DOM com o seletor ${seletor} para injetar ao ${propertyKey}`)
            }
            return elemento;
        }


        Object.defineProperty(
            target,
            propertyKey,
            {get: getter}
        )

    }
}