"use client"

import Link from "next/link"
import { BiLoader } from "react-icons/bi"
import Product from "../Product"
import { useEffect, useState } from "react"



export default function SimilarProducts() {
    const [products, setProducts] = useState([])
    
    const getRandomProducts = async () => {
      try {
        const response = await fetch('/api/products/get-random')
        const result = await response.json()

        if (result) {
          setProducts(result)
          return
        }

        setProducts([])
        
      } catch (error) {
        console.log(error)
        alert(error)
      }
    }

    useEffect(() => {
      getRandomProducts()
    }, [])

    return (
        <>
            <div className="border-b py-1 max-w-[1300px] mx-auto"/>

            <div className="max-w-[1300px] mx-auto mb-10 mt-10">
                <div className='flex items-center justify-between mt-4 mb-6'>
                    <div className="font-bold text-2xl py-2 mt-4">Similar items</div>
                    <button className=' font-normal text-sm text-gray-900  p-2 rounded-lg cursor-pointer hover:bg-gray-200 border-2 border-gray-900'>See More</button>
                </div>
                

                {products.length > 0 ? 
                    <div className="grid grid-cols-5 gap-y-2">
                        {products.map(product => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                :
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center gap-4 font-semibold">
                        <BiLoader size={30} className="text-blue-400 animate-spin" />
                        Loading Products...

                    </div>

                </div>
                } 

            </div>

        </>
    )
}