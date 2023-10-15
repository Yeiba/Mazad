"use client"

import Link from "next/link"
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useCart } from "../context/cart"
import { useSave } from "../context/save"
import { useUser } from "@/app/context/user"
import { toast } from "react-toastify"


export default function Product({ product }) {
    const cart = useCart()
    const save = useSave()
    const user = useUser();

    
    return(
        <>
            <div 
                className="max-w-[250px] p-1 border border-gray-100 hover:border-gray-200 hover:shadow-xl bg-white rounded-lg mx-auto"
            >
                <div className=" px-1">

                    
                    <Link href={`/product/${product.id}`}>
                        {product?.url ? <img className="rounded cursor-pointer" src={product.url+'/250'} /> : null }
                        <div className="font-semibold text-[15px] hover:text-blue-600 cursor-pointer mt-2">{product?.title.substring(0,80)}</div>
                        <div className="text-[12px] text-gray-500">{product?.condition}</div>
                        <div className="font-extrabold">£{(product?.price / 100).toFixed(2)} </div>
                        <div className="relative flex justify-between items-center text-[12px] text-gray-500">
                            <div className="flex items-center"> 
                                <div className="line-through">£{((product?.price * 1.2) / 100).toFixed(2)} </div>
                                <div className="px-2">-</div>
                                <div className="line-through">20%</div>
                            </div>
                        </div>
                    </Link>
                    <div className={`flex items-center justify-between mt-2 my-2 `}> 
                        <button 
                            
                            onClick={() => {
                                if (cart.isItemAdded) {
                                    cart.removeFromCart(Product)
                                    toast.info('Removed from cart', { autoClose: 3000})
                                } else {
                                    
                                    cart.addToCart(product.id)
                                    toast.success('Added to cart', {autoClose: 3000})
                                }
                            }}

                            className={
                                `flex items-center justify-center gap-3 p-2 m-2 w-full shadow-lg text-xs  text-white rounded-full cursor-pointer
                                ${cart.isItemAdded ? ' bg-yellow-500 hover:shadow-yellow-500' : 'bg-blue-500 shadow-lg hover:shadow-blue-300'}
                            `}
                        >
                            <AiOutlineShoppingCart size={15} />

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
                            
                            className={`flex items-center justify-center px-3 ${user?.id ? 'visible' : 'hidden'}  `}>

                            {save.isItemSaved  
                            ? <AiFillHeart size={22} />  
                            : <AiOutlineHeart size={22} /> }
                            
                        </button>
                    </div>              
                </div>
            </div>
        </>
    )
}