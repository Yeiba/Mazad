"use client"

import Link from "next/link"
import MainLayout from "@/app/layouts/MainLayout"
import SimilarProducts from "../../components/carousel/SimilarProducts"
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useCart } from "@/app/context/cart"
import { useSave } from "@/app/context/save"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import useIsLoading from "@/app/hooks/useIsLoading"
import { useRouter } from "next/navigation"





export default function Product({params}) {
    const cart = useCart() 
    const save = useSave()
    const router = useRouter()

    const [product, setProduct] = useState({})
    const getProduct = async () => {
        useIsLoading(true)
        setProduct({})

        const response = await fetch(`/api/product/${params.id}`)
        const prod = await response.json()
        setProduct(prod)
        cart.isItemAddedToCart(prod)
        useIsLoading(false)
    }

    

    useEffect(() => {
        getProduct()
    }, [])
    
    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex px-4 py-10">
                        {product?.url 
                            ? <img className="w-[40%] rounded-lg" src={product?.url+'/280'} /> 
                            : <div className="w-[40%] bg-gray-100"></div> }

                        <div className="px-6 w-full">
                            <div className="font-bold text-xl">{product?.title}</div>
                            
                            <div className="border-b py-1"/>

                            <div className="pt-3 pb-2">
                            
                                <div className="flex items-center">
                                    Condition: <span className="font-bold text-[17px] ml-2">{product?.condition}</span>
                                </div>

                                <div className="border-b py-1"/>

                                <div className="flex items-center">
                                    Details: <div className="text-sm text-gray-700 pt-2">{product?.details}</div>
                                </div>
                            </div>
                            
                            <div className="border-b py-1"/>
            
                            <div className="pt-3">
                                <div className="w-full flex items-start justify-between">
                                    <div className="flex items-center">
                                        Price:
                                        {product?.price
                                        ? <div className="font-bold text-[20px] ml-2">
                                            GBP £{(product?.price / 100).toFixed(2)}
                                         </div>
                                        : null }

                                    </div>
                                    <div className="grid ">
                                        <button 
                                            onClick={() => {
                
                                                cart.addToCart(product)
                                                if (!cart.cartTotal()) {
           
                                                    return
                                                }
                                                router.push('/Checkout')
                                                
                                            }}
                                            
                                            className="bg-blue-600 shadow-lg hover:shadow-blue-300 text-white py-2 px-10 rounded-full cursor-pointer mb-3">
                                            
                                                Buy It Now
                                        </button>
                                        <button
                                                onClick={() => {
                                                    if (cart.isItemAdded) {
                                                        cart.removeFromCart(Product)
                                                        toast.info('Removed from cart', { autoClose: 3000})
                                                    } else {
                                                        cart.addToCart(product)
                                                        toast.success('Added to cart', {autoClose: 3000})
                                                    }
                                                }}
                                                className={
                                                
                                                    `flex items-center justify-center gap-1 bg-blue-500 shadow-lg hover:shadow-blue-300 text-white py-2 px-10 rounded-full cursor-pointer mb-3
                                                    ${cart.isItemAdded ? ' bg-yellow-500 hover:shadow-yellow-500' : 'bg-blue-500 shadow-lg hover:shadow-blue-300'}
                                                `}>
                                                <AiOutlineShoppingCart size={18} />
                                                {cart.isItemAdded ? 'Remove From Cart' : 'Add To Cart'}
                                                
                                        </button>
                                        <button 
                                            onClick={() => {
                                                if (save.isItemSaved) {
                                                    save.removeFromSave(Product)
                                                    toast.info('Removed from save', { autoClose: 3000})
                                                } else {
                                                    save.addToSave(product)
                                                    toast.success('Added to save', {autoClose: 3000})
                                                }
                                            }}

                                            className={`    
                                                flex items-center justify-center gap-1 border border-gray-400 bg-gray-50 shadow-lg hover:shadow-gray-300 text-gray-800 py-2 px-10 rounded-full cursor-pointer mb-3
                                                ${save.isItemSaved ? ' bg-gray-700 shadow-lg hover:shadow-gray-300 text-white' : 'bg-gray-50 shadow-lg hover:shadow-gray-300'}
                                                `}>
                                                {save.isItemSaved  
                                                    ? <AiFillHeart size={18} />  
                                                    : <AiOutlineHeart size={18} /> }

                                                {save.isItemSaved ? 'Remove From Save' : 'Add To Save'}
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="border-b py-1"/>
                            <div className="pt-3 ">
                                <div className="font-semibold pb-1">Discription:</div>
                                <div className="text-sm">{product?.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b py-1"/>

                <div className="w-[500px] mx-auto justify-center py-5">
                    
                    <div className=" flex justify-start items-start py-5">
                        <div className="text-lg font-semibold mx-10 justify-end">Shipping:</div>
                        <div className="text-lg justify-start">
                            US $69.99 FedEx International Economy®
                            <p className=" text-xs py-2 text-gray-500">International shipment of items may be subject to customs processing and additional charges.Located in: Miami, Florida, United States.</p>
                            <Link href="/" className="text-lg font-normal hover:underline">See details</Link>
                        </div>
                        

                    </div>

                    <div className=" flex justify-start items-start py-5">
                        <div className="text-lg font-semibold mx-10 justify-end">Delivery:</div>
                        
                        <div className=" text-lg justify-start">
                            Estimated between Thu, Oct 26 and Fri, Nov 17 to 12000
                            <p className=" text-xs py-2 text-gray-500">Please note the delivery estimate is greater than 11 business days. Seller ships within 1 day after receiving cleared payment. Please allow additional time if international delivery is subject to customs processing.</p>
                            <Link href="/" className="text-lg font-normal hover:underline">See details</Link>
                        </div>
                        
                    </div>

                    <div className=" flex justify-start items-start py-5">
                        <div className="text-lg font-semibold mx-10 justify-end">Returns:</div>
                        <div className=" text-lg justify-start">
                            30 days returns. Buyer pays for return shipping.
                            <p className=" text-xs py-2 text-gray-500">Please note the delivery estimate is greater than 11 business days. Seller ships within 1 day after receiving cleared payment. Please allow additional time if international delivery is subject to customs processing.</p>
                            <Link href="/" className="text-lg font-normal hover:underline">See details</Link>
                        </div>
                        
                    </div>

                    <div className=" flex justify-start items-start py-5">
                        <div className="text-lg font-semibold mx-10 justify-end">Payments:</div>
                        <div className=" text-lg justify-start">
                            Payment Methode tearms and privacy
                        </div>
                        
                    </div>
                    
                </div>
                                                
                <SimilarProducts />
            </MainLayout>
        </>
    )
}