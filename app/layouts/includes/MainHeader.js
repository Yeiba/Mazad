"use client"

import Link from 'next/link'
import { BiLoaderCircle } from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlineFilter } from "react-icons/ai"
import { useState } from 'react'
import { debounce } from 'debounce'
 
export default function MainHeader() {

    const [items, setItems] = useState([]) 
    const [isSearching, setIsSearching] = useState(null)

    const handleSearchName = debounce(async (event) => {
        if (event.target.value == "") {
            setItems([])
            return
        }

        setIsSearching(true)

        try {
            const response = await fetch(`/api/products/search-by-name/${event.target.value}`)
            const result = await response.json()

            if (result) {
                setItems(result)
                setIsSearching(false)
                return
            }

            setItems([])
            setIsSearching(false)
            
        } catch (error) {
            console.log(error)
            alert(error)
            
        }

    }, 500)
    
    return (
        <>
            <div id="MainHeader" className="items-center border-b ">
                <div className="flex items-center justify-between w-full max-auto max-w-[1300px] bg-white">
                    <div className='flex items-center w-full bg-none'>
                        <div className='flex justify-between gap-10 max-w-[1300px] w-full px-3 py-5 max-auto'>
                            <Link href="/">
                                <img width={135} src='/images/logo.svg' />
                            </Link>
                            <div className='w-full'>
                                <div className='relative '>
                                    <div className='flex items-center justify-center '>
                                        <div className=' overflow-hidden relative flex items-center border rounded-full hover:bg-gray-50 border-gray-900 min-w-[700px]'>
                                            <div className='flex items-center pl-4'>
                                                <AiOutlineSearch size={22} />
                                            </div>

                                            <input className='w-full bg-transparent placeholder-gray-400 text-sm pl-3 focus:outline-none' 
                                            onChange={handleSearchName}
                                            placeholder='Search for items' 
                                            type='text' 
                                            
                                            />
                                            
                                            {isSearching ? <BiLoaderCircle size={22} className='me-2 animate-spin' /> : null }

                                            {items.length > 0 ?
                                                <div className=' absolute bg-white max-w-[600px] h-auto w-full z-20 left-0 top-12 border p1 '>
                                                    {items.map((item) => (
                                                        <div className='p-1' key={item.id}>
                                                            <Link
                                                                href={`/product/${item?.id}`}
                                                                className='flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 p-1 px-2'
                                                                
                                                            >
                                                                <div className='flex items-center'>
                                                                    <img className=' rounded-md' width="40" src={item?.url+'/40'} />
                                                                    <div className=' truncate ml-2'> {item?.title} </div>

                                                                </div>
                                                                <div className=' truncate'> {(item?.price / 100).toFixed(2)} </div>

                                                            </Link>

                                                        </div>
                                                    ))}

                                                </div>
                                            : null}
                                            


                                            <button className='flex items-center  bg-blue-600 shadow-lg hover:bg-blue-700 text-sm font-semibold text-white p-[11px] ml-2 px-8'>
                                                <AiOutlineSearch size={22} />
                                            </button>
                                        </div>
                                        
                                        <button className=' flex items-center gap-2 border border-gray-400 bg-white hover:bg-gray-100  text-gray-800 py-2.5 px-8 rounded-full cursor-pointer ml-2'>
                                            Advanced  
                                            <AiOutlineFilter size={18} />
                                            
                                        </button> 
                                        
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                    
                  
                </div>

                <div id='advanced_search'  className=' hidden'>

                    <div className='border-b'/>
                    <ul className="text-gray-700 flex items-center justify-between mt-5 mb-5 px-60">
                            <li className="font-bold text-lg"> By Items</li>
                            <li className="font-bold text-lg"> By Stores</li>
                            <li className="font-bold text-lg"> By Auctions</li>
                        </ul>
                    
                    <div id='by-items' className='flex items-center justify-between w-full mx-auto mt-5 mb-5 px-40 '>
                        <ul className="text-gray-700">
                            <li className="font-bold text-lg"> By Items</li>
                            
                        </ul>
                        <ul className="text-gray-700">
                            <li className="font-bold text-lg"> By Stores</li>
                            
                        </ul>
                        <ul className="text-gray-700">
                            <li className="font-bold text-lg"> By Auctions</li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
        </>
    )
}