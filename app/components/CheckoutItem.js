"use client"

import { usePathname } from "next/navigation"


export default function CheckoutItem({ product }) {
    const Pathname = usePathname()
    return(
        <>
            <div className="flex justify-start rounded-lg mb-2 border p-4">
                <img className="rounded-md w-[150px] h-[150px]" src={product?.url+'/150'} alt="" />

                <div className="overflow-hidden pl-2">
                    <div className="font-semibold hover:text-blue-600">
                        {product?.title}
                    </div>

                    <div className="text-lg font-semibold">
                        <span className="font-bold ">{product?.details} </span>
                    </div>

                    <div className="text-lg font-semibold">
                        <span className="font-bold">£ {(product?.price / 100 ).toFixed(2)} </span>
                    </div>
                   
                    <div className="text-sm mt-2">
                        {product?.description.substring(0,130)}...

                    </div>  
                    {Pathname == '/cart' ? 
                        <div className="text-sm mt-2 w-full flex justify-end underline text-blue-600 cursor-pointer shadow-lg hover:shadow-blue-300">
                            Remove
                        </div>
                    
                    : null }

                </div>
               

            </div>
        </>
    )
}