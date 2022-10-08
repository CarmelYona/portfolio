import { storageService } from './async-stoarge.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'products'
var gProducts

export const shopService = {
    query,
    getById,
    save,
    remove,
    getCurrProduct,
    updateProduct,
    // setWishList
}
window.cs = shopService

function getCurrProduct() {
    return gProducts
}

async function query() {
    // gProducts = await storageService.query(STORAGE_KEY)
    gProducts = await httpService.get('contact')
    return gProducts
}

async function getById(productId) {
    return await storageService.get(STORAGE_KEY, productId)
    // return httpService.get(`product/${productId}`)
}

async function remove(productId) {
    await storageService.remove(STORAGE_KEY, productId)
}


async function updateProduct(val, productId) {
    console.log(productId)
    const idx = gProducts.findIndex(product => product._id === productId)
    gProducts[idx].isCheck = val
    await save(gProducts[idx])
    return gProducts
}

async function save(product) {
    if (product._id) {
        // await httpService.put(`product/${product._id}`, product)
        const updateProduct = await storageService.put(STORAGE_KEY, product)
        return updateProduct
    } else {
        // await httpService.post(`product`, product)
        const newProducts = await storageService.post(STORAGE_KEY, product)
        return newProducts
    }
}

// async function setWishList() {
//     var wishList = []
//     gProducts.map(product => {
//         if (product.isCheck) {
//             wishList.push(product)
//         }
//     })
//     return wishList
// }

