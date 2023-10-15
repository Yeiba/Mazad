"use client"

import { useCart } from "../context/cart"
import { toast } from "react-toastify"

export default function SavedItem({ product }) {
    const cart = useCart()

    const removeItemFromSave = () => {
        let res = confirm(`Are you sur want to remove this? "${product.title}"`)
        if (res) {
            cart.removeFromCart(product)
            toast.info('Removed from cart', {autoClose: 3000})
        }
    }
    return( 
        <>
            <div className="relative flex justify-between my-2 border w-full p-6 hover:shadow-lg">
                <img src={product?.url+'/150'} className="rounded-md w-[150px] h-[150px]" />
                <div className="overflow-hidden pl-4 w-full " >
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center font-semibold justify-between w-[400px] text-[16px] hover:text-blue-600">
                            {product?.title}
                        </div>
                        <div className="font-semibold">
                            {product?.details}
                        </div>
                        <div className="font-bold text-lg">
                            £{(product?.price / 100).toFixed(2)}
                        </div>
                    </div>
                    <div className="font-semibold mt-2">
                        {product?.condition}

                    </div>
                    <div className="text-sm mt-2 pb-10">
                        {product?.description.substring(0,150)}...
                    </div>

                    <div className=" absolute right-0 bottom-0 p-4 text-sm ">
                        <button 
                            onClick={() => removeItemFromSave()}
                            className={`
                                py-2 px-10 rounded-full text-white
                                ${cart.removeItemFromSave ? 'bg-blue-500 shadow-lg hover:shadow-blue-300' : ' bg-yellow-500 hover:shadow-yellow-500'}
                            `}
                        >
                             Remove
                        </button>
                        
                    </div>
                </div>

            </div>
        </>
    )
}