"use client"

import { AiOutlineCheckCircle } from "react-icons/ai"
import MainLayout from "../layouts/MainLayout"
import Link from "next/link"

export default function Success() {
    return(

        <>
            <MainLayout>
                <div id="Success" className="mt-12 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
                    <div className="bg-white w-full p-6 min-h-[200px] flex items-center justify-center">
                        <div>
                            <div className="flex items-center text-xl">
                                <AiOutlineCheckCircle className="text-green-500 " size={35} />
                                <span className="pl-4">Payment Successful</span>
                            </div>
                            <p className="text-sm">Thank you! We've received your payment.</p>
                            <Link href="/" className="w-full">
                                <div className="flex items-center justify-center gap-3 p-[11px] mt-4 w-full bg-blue-600 shadow-lg text-sm font-semibold hover:shadow-blue-300 text-white rounded-full cursor-pointer">
                                    Back to shop

                                </div>
                            
                            </Link>
                        </div>

                    </div>

                </div>
            </MainLayout>
        </>
    )
}