"use client"

import MainLayout from "../layouts/MainLayout"
import SimilarProducts from "../components/carousel/SimilarProducts"
import SavedItem from "../components/SavedItem"
import { AiOutlineCreditCard } from "react-icons/ai"
import { useRouter } from "next/navigation"
import { useCart } from "../context/cart"
import { useEffect } from "react"
import useIsLoading from "../hooks/useIsLoading"
import ClientOnly from "../components/ClientOnly"
import { useSave } from "../context/save"

export default function Save() {
    const router = useRouter()
    const cart = useCart()
    const save = useSave()


    useEffect(() => {
        useIsLoading(true)
        cart.getCart()
        cart.cartTotal()
        useIsLoading(false)

    }, [cart])

    const GoToCheckout = () => {
        if (!cart.cartTotal()) {
            alert("You dont't have any items in the cart")
            return
        }
        router.push('/Checkout')
    }



    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
                    <div className="text-2xl font-bold my-4">Saved items</div>
                    <div className="relative flex items-baseline justify-between gap-2">
                        <ClientOnly>
                            <div className="w-[65%]">
                                {cart.getCart().map(product => (
                                    <SavedItem key={product?.id} product={product} />
                                ))}
                                
                            </div> 
                        </ClientOnly>
                        
                    </div>
                </div>
                <SimilarProducts />
            </MainLayout>
        </>
    )
}