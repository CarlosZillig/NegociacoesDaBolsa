export function domInjector(seletor) {
    return function (target, propertyKey) {
        let elemento = HTMLElement;
        const getter = function () {
            if (!elemento) {
                const elemento = document.querySelector(seletor);
                console.log(`Buscando elemento no DOM com o seletor ${seletor} para injetar ao ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
