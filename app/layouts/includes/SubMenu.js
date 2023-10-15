"use client"

import Link from "next/link"
 
export default function SubMenu() {

    
    return (
        <>
            <div id="SubMenu"  className="  border-b items-center ">
                <div className="flex items-center justify-between w-full max-auto max-w-[1300px]">
                    <ul
                        id="TopMenuLeft"
                        className="flex items-center text-[14px] px-2 h-12"
                    >
                        <Link className="px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 border rounded-lg ml-1" href="/">All</Link>
                        <Link className="px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 border rounded-lg ml-1" href="/auction">Live Auction</Link>
                        <Link className="px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 border rounded-lg ml-1" href="/cober">Cober</Link>
                        <Link className="px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 border rounded-lg ml-1" href="/realestate">Real Estate</Link>
                        <Link className="px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 border rounded-lg ml-1" href="/electronics">Electronics</Link>
                        <Link className="px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 border rounded-lg ml-1" href="/motors">Motors</Link>
                        <Link className="px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 border rounded-lg ml-1" href="/fashion">Fashion</Link>
                        <Link className="px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 border rounded-lg ml-1" href="/art">Collectables and Art</Link>
                        <Link className="px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 border rounded-lg ml-1" href="/sports">Sports</Link>
                        <Link className="px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 border rounded-lg ml-1" href="/health">Health & Beauty</Link>
                        <Link className="px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 border rounded-lg ml-1" href="/industrial">Industrial Equipment</Link>
                        <Link className="px-3 cursor-pointer bg-gray-100 hover:bg-gray-200 border rounded-lg ml-1" href="/garden">Home & Garden</Link>
                    </ul>
                </div>
            </div>
        </>
    )
}