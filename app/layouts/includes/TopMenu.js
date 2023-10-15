"use client"

import Link from 'next/link'
import { BsChevronDown } from "react-icons/bs"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { AiOutlineMessage } from "react-icons/ai"
import { AiOutlineMedicineBox } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"

import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineShop } from "react-icons/ai"
import { BiSlideshow } from "react-icons/bi"
import { AiOutlineVideoCameraAdd } from "react-icons/ai"
import { AiOutlineSetting } from "react-icons/ai"
import { AiOutlineLogout } from "react-icons/ai"
import { AiOutlineLogin } from "react-icons/ai"
import { AiOutlineInfoCircle } from "react-icons/ai"

import { useUser } from "@/app/context/user"
import { useState } from 'react'

import {useCart} from "../../context/cart"
import { useSave } from '@/app/context/save'

 
export default function TopMenu() {
    const user = useUser();
    const cart = useCart();
    const save = useSave();

    const [isMenu, setIsMenu] = useState(false)
    const [isGuestMenu, setIsGuestMenu] = useState(false)

    const isGuest = () => {
        
            return (
                <button 
                    onClick={() => !isGuestMenu ? setIsGuestMenu(true) : setIsGuestMenu(false)}
                    className='flex items-center gap-2 hover:underline cursor-pointer'
                >
                    <div>Hi, Our Guest</div>
                    <BsChevronDown />
                    <img width={50} src='/images/user-132.svg' className='rounded-full w-10 border-2 border-blue-600' /> 

                </button>
            )
        }
        


    const isLoggedIn = () => {
        if (user && user?.id) {
            return (
                <button 
                    onClick={() => !isMenu ? setIsMenu(true) : setIsMenu(false)}
                    className='flex items-center gap-2 hover:underline cursor-pointer '
                >
                    <div>Hi, {user.name}</div>
                    <BsChevronDown />
                    <img width={50} src={user?.picture} className='rounded-full w-10 border-2 border-blue-600' />  

                </button>
            )
        }

        return (
            
                        <li className="relative px-3"> 
                            {isGuest()}
                            
                            <div
                                id='AuthDropdown'
                                className={`
                                     mt-3 absolute bg-white w-[400px] text-[#333333] right-2 z-40 border shadow-lg
                                    ${isGuestMenu ? 'visible' : 'hidden'}
                                
                                `}

                            >
                                <div className='flex items-center justify-start gap-3 p-3 hover:bg-blue-100'>
                                    <img width={50} src='/images/user-132.svg' className='rounded-full w-10 border-2 border-blue-600' /> 
                                    <div className='font-bold text-[15px] text-blue-600'>Guest</div>   
                                </div>
                                <div className='border-b'/>
                                    <ul className='bg-white '>
                                        <li className='text-[15px] gap-5 font-semibold flex items-center justify-start py-2 px-4 w-full mt-2 text-blue-600 hover:bg-blue-100 cursor-pointer'>
                                            <div className='relative p-2 hover:underline cursor-pointer bg-blue-50 rounded-full'>
                                                <AiOutlineInfoCircle size={22} />
                                            </div>
                                            <Link href="/sitting">
                                                Helpe & Contact
                                            </Link>
                                        </li>
                                        <Link href="/auth">
                                        <li 
                                            className='text-[15px] gap-5 font-semibold flex items-center justify-start py-2 mb-2 px-4 w-full mt-2 text-blue-600 hover:bg-blue-100 cursor-pointer'>
                                            <div className='relative p-2 hover:underline cursor-pointer bg-blue-50  rounded-full'>
                                                <AiOutlineLogin size={22} />
                                            </div>
                                            Login in or Sign up
                                        </li>
                                        </Link>
                                        
                                    
                                    </ul>
                            </div>
                        </li>
            
        )
    }
    return (
        <>
            <div id="TopMenu" className='items-center'>
                <div className="flex items-center justify-between w-full max-auto max-w-[1300px] rounded-full  m-2 bg-white ">
                    
                    <ul id="TopMenuLeft"
                        className="flex items-center text-[13px] text-[#333333] px-2 h-12 "
                    >
                        
                        <li className='px-3 cursor-pointer hover:underline'>
                            
                            Helpe & Contact
                        </li>
                        <li className='flex items-center gap-2 px-3 hover:underline cursor-pointer'>
                            Ship to 
                            <img width={25} src='/images/uk.png' />
                            
                        </li>
                        <li className='flex items-center gap-2 px-3 hover:underline cursor-pointer'>
                            En
                            <BsChevronDown />
                        </li>
                    </ul>

                    <ul id='TopMenuCenter'
                        className="flex items-center text-[13px] text-[#333333] px-3 h-8 gap-"
                    >

                        <li className='px-8 py-2 hover:bg-blue-50 rounded-lg cursor-pointer'>
                            <Link href="/">
                                <div className='relative'>
                                    <AiOutlineHome size={25} />
                                
                                </div>
                            </Link>

                        </li>
                        <li className='px-8 py-2 hover:bg-blue-50 rounded-lg cursor-pointer'>
                            <Link href="/">
                                <div className='relative'>
                                    <AiOutlineShop size={25} />
                                
                                </div>
                            </Link>
                        </li>
                        <li className='px-8 py-2 hover:bg-blue-50 rounded-lg cursor-pointer'>
                            <Link href="/">
                                <div className='relative'>
                                    <BiSlideshow size={25} />
                                    
                                </div>
                            </Link>
                        </li>

                        <li className='px-8 py-2 hover:bg-blue-50 rounded-lg cursor-pointe'>
                            <Link href="/">
                                <div className='relative'>
                                    <AiOutlineVideoCameraAdd size={25} />
                                
                                </div>
                            </Link>
                        </li>
                        
                    </ul>

                    <ul id='TopMenuRight'
                        className="flex items-center text-[13px] text-[#333333] px-3 h-8 gap-3"
                    >

                        
                        <li className='p-2 hover:underline cursor-pointer bg-blue-50 hover:bg-white rounded-full'>
                            <Link href="/cart">
                            <div className='relative'>
                                <AiOutlineShoppingCart size={22} />

                                {cart.cartCount() > 0 ?
                                    <div className='absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white'>
                                        <div className='flex items-center justify-center -mt-[1px] '> {cart.cartCount()} </div>
                                    </div>
                                :<div></div>}
                                
                                
                            </div>
                            </Link>

                        </li>
                        
                        <li className={`p-2 hover:underline cursor-pointer bg-blue-50 hover:bg-white rounded-full ${user?.id ? 'visible' : 'hidden'}`}>
                           
                            <div className='relative'>
                                <AiOutlineMessage size={22} />
                                <div className='absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white'>
                                    <div className='flex items-center justify-center -mt-[1px] '>5</div>
                                </div>
                            </div>
                        </li>
                        <li className={`p-2 hover:underline cursor-pointer bg-blue-50 hover:bg-white rounded-full ${user?.id ? 'visible' : 'hidden'}`}>
                            <Link href="/save">
                            <div className='relative'>
                                <AiOutlineHeart size={22} />
                                {save.saveCount() > 0 ?
                                    <div className='absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white'>
                                        <div className='flex items-center justify-center -mt-[1px] '> {cart.cartCount()} </div>
                                    </div>
                                :<div></div>}
                                
                                


                            </div>
                            </Link>
                        </li>

                        <li className="relative px-3"> 
                            {isLoggedIn()}
                            
                            <div
                                id='AuthDropdown'
                                className={`
                                     mt-3 absolute bg-white w-[400px] text-[#333333] right-2 z-40 border shadow-lg
                                    ${isMenu ? 'visible' : 'hidden'}
                                
                                `}

                            >
                                <div className='flex items-center justify-start gap-3 p-3 hover:bg-blue-100'>
                                    <img width={50} src={user?.picture} className='rounded-full w-9 border-2 border-blue-600' />
                                    <div className='font-bold text-[15px] text-blue-600'>{user?.name}</div>   
                                </div>
                                <div className='border-b'/>
                                    <ul className='bg-white '>
                                        <li className='text-[15px] gap-5 font-semibold flex items-center justify-start py-2 px-4 w-full mt-2 text-blue-600 hover:bg-blue-100 cursor-pointer'>
                                            <div className='relative p-2 hover:underline cursor-pointer bg-blue-50  rounded-full'>
                                                <AiOutlineSetting size={22} />
                                            </div>
                                            <Link href="/sitting">
                                                Account settings
                                            </Link>
                                        </li>
                                        <li className='text-[15px] gap-5 font-semibold flex items-center justify-start py-2 px-4 w-full mt-2 text-blue-600 hover:bg-blue-100 cursor-pointer'>
                                            <div className='relative p-2 hover:underline cursor-pointer bg-blue-50  rounded-full'>
                                                <AiOutlineInfoCircle size={22} />
                                            </div>
                                            <Link href="/sitting">
                                                Helpe & Contact
                                            </Link>
                                        </li>
                                        <li 
                                            
                                            onClick={() => {user.signOut(); setIsMenu(false)}}

                                            className='text-[15px] gap-5 font-semibold flex items-center justify-start py-2 mb-2 px-4 w-full mt-2 text-blue-600 hover:bg-blue-100 cursor-pointer'>
                                            <div className='relative p-2 hover:underline cursor-pointer bg-blue-50 rounded-full'>
                                                <AiOutlineLogout size={22} />
                                            </div>
                                            Sign out
                                        </li>
                                    </ul>
                            </div>
                        </li>
                        
                    </ul>

                </div>
                <div className='border-b'/>

            </div>
        </>
    )
}