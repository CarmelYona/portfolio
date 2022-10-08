import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loadShop } from "../store/action/shop.actions";

export const ShopApp = () => {
    const [products, setProducts] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        // loadProducts()
    }, [])

    const loadProducts = async () => {
        const products = await dispatch(loadShop())
        setProducts(products)
    }
    return <section className="product-app flex column">
        Protfolio web
    </section>
}