import list from './assets/data_product.json'

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(list)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(list.find(prod => prod.id === productId ))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(list.filter(prod => prod.category === categoryId ))
        }, 500)
    })
}