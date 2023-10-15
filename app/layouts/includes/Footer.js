'use client'
import Link from "next/link"
export default function Footer() {
    return (
        <>
            <div id="Footer" className="border-t mt-20 px-2">
                <div className="flex items-baseline justify-between w-full mx-auto max-w-[1300px] py-10">
                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">Buy</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer"><Link href="/auth">Registration</Link></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/mazad-money-back-guarantee">Mazad Money Back Guarantee</Link></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/bidding-&-buying-help">Bidding & buying help</Link></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/stores">Stores</Link></li>
                    </ul>

                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">Sell</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer"><Link href="/start-selling">Start selling</Link></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/learn-to-sell">Learn to sell</Link></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/affiliates">Affiliates</Link></li>

                        <ul className="text-gray-700 mt-5 ">
                            <li className="font-bold text-lg">Auction</li>
                            <li className="mt-2 py-1 text-xs hover:underline cursor-pointer"><Link href="/start-auction">Start auction</Link></li>
                            <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/learn-to-auction">Learn to auction</Link></li>
                            <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/affiliates">Affiliates</Link></li>
                        </ul>
                    </ul>

                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">About Mazad</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer"><Link href="/company-info">Company info</Link></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/news">News</Link></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/investors">Investors</Link></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/carears">Carears</Link></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/government-relations">Government relations</Link></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/policies">Policies</Link></li>
                    </ul>

                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">Stay connected</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer"><Link href="/facebook">Facebook</Link></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/instagram">Instagram</Link></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/twitter">Twitter</Link></li>
                    </ul>

                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">Help & Contact</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Registration</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/buyinghelp">Mazad Money Back Guarantee</Link></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/buyinghelp">Bidding & buying help</Link></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/stores">Stores</Link></li>

                        <ul className="text-gray-700 mt-5 ">
                            <li className="font-bold text-lg">Community</li>
                            <li className="mt-2 py-1 text-xs hover:underline cursor-pointer"><Link href="/startselling">Start selling</Link></li>
                            <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/learntosell">Learn to sell</Link></li>
                            <li className="py-1 text-xs hover:underline cursor-pointer"><Link href="/affiliates">Affiliates</Link></li>
                        </ul>

                    </ul>
                    
                </div>
                    <ul className="flex items-center justify-center gap-1 py-8 text-gray-700">
                            <li className="text-xs cursor-pointer">Copyright © 2023 Quinn studio Ltd. All Rights Reseved.</li>
                            <li ><Link className="text-xs underline cursor-pointer" href="/accessibiity">Accessibiity,</Link></li>
                            <li className="text-xs underline cursor-pointer"><Link href="/useragreement">User Agreement,</Link></li>
                            <li className="text-xs underline cursor-pointer"><Link href="/privacy">Privacy,</Link></li>
                            <li className="text-xs underline cursor-pointer"><Link href="/paymentstermsofuse">Payments Terms of use,</Link></li>
                            <li className="text-xs underline cursor-pointer"><Link href="/cookies">Cookies,</Link></li>
                            <li className="text-xs underline cursor-pointer"><Link href="/yourprivacychoices">Your Privacy Choices</Link></li>
                            
                    </ul>
                
            </div>

        </>
    )
  }
  