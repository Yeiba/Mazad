"use client"

import { AiOutlineCheckCircle } from "react-icons/ai"
import MainLayout from "../layouts/MainLayout"
import Link from "next/link"

export default function RegisterSuccess() {
    return(

        <>
            
                <div id="Success" className="mt-12 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
                    
                    <div className="w-full flex items-center justify-center p-10 border-b-gray-300">
                        <Link href="/" className="min-w-[170px]">
                            <img src="/images/logo.svg" width="170" />
                        </Link>
                    </div>

                    <div className="bg-white w-full p-6 min-h-[200px] flex items-center justify-center">
                        <div>
                            <div className="flex items-center text-xl">
                                <AiOutlineCheckCircle className="text-green-500 " size={35} />
                                <span className="pl-4">Register Successful</span>
                            </div>
                            <p className="text-sm">Thank you! We've register in Mazad.</p>
                            <Link href="/" className="w-full">
                                <div className="flex items-center justify-center gap-3 p-[11px] mt-4 w-full bg-blue-600 shadow-lg text-sm font-semibold hover:shadow-blue-300 text-white rounded-full cursor-pointer">
                                    Continue shopping

                                </div>
                            
                            </Link>
                        </div>

                    </div>

                </div>
           
        </>
    )
}