import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import {ProductsGrid} from './ProductsGrid'
import './Home.css'

export function HomePage({cart}){
    const [products, setProducts]= useState([])

    useEffect(()=>{
        const gethomeData= async()=>{
            const response= await axios.get('/api/products')
            setProducts(response.data)
        }

        gethomeData()
    },[])

    return (
        <>
            <title>Ecommerce Project</title>
            <Header cart={cart}/>
            <div className="home-page">
                <ProductsGrid products={products}/>
            </div>
        </>
    )
}