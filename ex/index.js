const product = {
    name: 'Caneta azul',
    preco: 1.90,
    sale: 0.05
}

function clone(object) {
    return { ...object}
}

const newProduct = clone(product)
newProduct.name = 'Caneta vermelha'

console.log(newProduct, product)