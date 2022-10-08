// import { userService } from "../../services/user.service-old.js"
import { shopService } from "../../services/shop-service"

// Action Creators:
export function getActionLoadShop(shop) {
    return {
        type: 'SET_SHOP',
        shop
    }
}


export function getActionRemoveShop(shopId) {
    return {
        type: 'REMOVE_PRODUCT',
        shopId
    }
}

export function getActionAddShop(shop) {
    return {
        type: 'ADD_PRODUCT',
        shop
    }
}

export function getActionUpdateShop(shop) {
    return {
        type: 'UPDATE_PRODUCT',
        shop
    }
}



var subscriber
export function loadShop() {
    return async (dispatch) => {
        try {
            const shop = await shopService.query()
            dispatch(getActionLoadShop(shop))
            return shop
        } catch (err) {
            console.log('Cannot load shop', err)
        }

        if (subscriber) shopService.unsubscribe(subscriber)
        subscriber = (ev) => {
            dispatch(ev.data)
        }
    }
}

// export function removeProduct(productId) {
//     return async (dispatch) => {
//         try {
//             await shopService.remove(productId)
//             console.log('Deleted Succesfully!')
//             dispatch(getActionSetShop(productId))
//             return true
//         } catch (err) {
//             console.log('Cannot remove shop', err)
//             return false
//         }
//     }
// }

export function addProduct(product) {
    return async (dispatch) => {
        try {
            const savedShop = await shopService.save(product)
            console.log('Added Shop', savedShop)
            dispatch(getActionLoadShop(savedShop))
            return savedShop
        } catch (err) {
            console.log('Cannot add shop', err)
            throw err
        }
    }

}

// export function updateShop(shop) {
//     return async (dispatch) => {
//         try {
//             const savedShop = await shopService.save(shop)
//             dispatch(getActionSetShop(savedShop))
//             return savedShop
//         }
//         catch (err) {
//             console.log('Cannot add shop', err)
//         }
//     }
// }

// export function setFilterBy(filterBy, shopId) {
//     return async (dispatch) => {
//         const shop = await filterByName(filterBy, shopId)
//         dispatch({ type: 'SET_SHOP', shop })
//     }
// }

// export function setOnScreenClick(isOnScreenClick) {
//     return (dispatch) => {
//         dispatch({ type: 'SET_IS_ON_SCREEN_CLICK', isOnScreenClick })
//     }
// }


