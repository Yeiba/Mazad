"use client"

import { useRouter } from "next/navigation"
import TextInput from "../components/TextInput"
import MainLayout from "../layouts/MainLayout"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useUser } from "../context/user"
import { useEffect, useState } from "react"
import useIsLoading from "../hooks/useIsLoading"
import useUserAddress from "../hooks/useUserAddress"
import { Result } from "postcss"
import { toast } from "react-toastify"
import useCreateAddress from "../hooks/useCreateAddress"
import ClientOnly from "../components/ClientOnly"

export default function Address() {
    const router = useRouter()
    const {user} = useUser()

    const [addressId, setAddressId] = useState(null)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [phone, setPhone] = useState('')
    const [isUpdatingAddress, setIsUpdatingAddress] = useState(false)
    const [error, setError] = useState({})

    const showError = (type) => {
        if (Object.entries(error).length > 0 && error?.type == type) {
            return error.message

        }
        return ''
    }

    const getAddress = async () => {
        if (user?.id == null || user?.id == undefined) {
            useIsLoading(false)
            return
        }
        const response = await useUserAddress()
        if (response) {
            setTheCurrentAddress(response)
            useIsLoading(false)
            return
        }
        useIsLoading(false)
    }

    useEffect(() => {
        useIsLoading(true)
        getAddress()
    }, [user])

    const setTheCurrentAddress = (result) => {
        setAddressId(result.id)
        setName(result.name)
        setAddress(result.address)
        setZipcode(result.zipcode)
        setCity(result.city)
        setCountry(result.Country)
        setPhone(result.setPhone)
    }

    const validate = () => {
        setError({})
        let isError = false

        if (!name) {
            setError({type: 'name', message: 'A name is required'})
            isError = true
        } else if (!address) {
            setError({type: 'address', message: 'A address is required'})
            isError = true
        } else if (!zipcode) {
            setError({type: 'zipcode', message: 'A zipcode is required'})
            isError = true
        } else if (!city) {
            setError({type: 'city', message: 'A city is required'})
            isError = true
        } else if (!country) {
            setError({type: 'country', message: 'A country is required'})
            isError = true
        } else if (!phone) {
            setError({type: 'phone', message: 'A Phone Number is required'})
            isError = true
        }
        return isError
    }

    const submit = async (event) => {
        event.preventDefault();
        let isError = validate()

        if (isError) {
            toast.error(error.message, { autoClose: 3000 })
            return
        }

        try {

            setIsUpdatingAddress(true)

            const response = await useCreateAddress({
                addressId,
                name,
                address,
                zipcode,
                city,
                country,
                phone,

            })

            setTheCurrentAddress(response)
            setIsUpdatingAddress(false)
            
            toast.success('Address Updated! ' , { autoClose: 3000})

            router.push('/Checkout')


        } catch (error) {
            setIsUpdatingAddress(false)
            console.log(error)
            alert(error)
            
        }
 
    }
    return(
        <>
            <MainLayout>
                <div id="AddressPage" className="mt-4 max-w-[600px] mx-auto px-2">
                    <div className="mx-auto bg-white rounded-md p-3">
                        <div className="text-xl text-bold mb-2">Address Details</div>
                        <form onSubmit={submit}>
                            <div className="mb-4">
                                <ClientOnly>
                                    <TextInput
                                        className=" w-full"
                                        string={name}
                                        placeholder="Name"
                                        onUpdate={setName}
                                        error={showError('name')}
                                    />
                                </ClientOnly>
                                </div>
                            <div className="mb-4">
                                <ClientOnly>
                                    <TextInput
                                        className=" w-full"
                                        string={address}
                                        placeholder="Address"
                                        onUpdate={setAddress}
                                        error={showError('address')}
                                    />
                                </ClientOnly>
                                </div>
                            <div className="mb-4">
                                <ClientOnly>
                                    <TextInput
                                        className=" w-full"
                                        string={zipcode}
                                        placeholder="Zipcode"
                                        onUpdate={setZipcode}
                                        error={showError('zipcode')}
                                    />
                                </ClientOnly>
                                </div>
                            <div className="mb-4">
                                <ClientOnly>
                                    <TextInput
                                        className=" w-full"
                                        string={city}
                                        placeholder="City"
                                        onUpdate={setCity}
                                        error={showError('city')}
                                    />
                                </ClientOnly>
                                </div>
                            <div className="mb-4">
                                <ClientOnly>
                                    <TextInput
                                        className=" w-full"
                                        string={country}
                                        placeholder="Country"
                                        onUpdate={setCountry}
                                        error={showError('country')}
                                    />
                                </ClientOnly>
                                </div>
                           
                            <div className="mb-4">
                                <ClientOnly>
                                    <TextInput
                                        className=" w-full"
                                        string={phone}
                                        placeholder="Phone Number"
                                        onUpdate={setPhone}
                                        error={showError('phone')}
                                    />
                                </ClientOnly>
                                </div>
                            
                            
                            <button
                                type="submit"
                                disabled={isUpdatingAddress}
                                className={`
                                    mt-6 w-full text-white text-lg font-semibold p-3 rounded-full shadow-lg hover:shadow-blue-300 
                                    ${isUpdatingAddress ? 'bg-blue-800' : 'bg-blue-600'}
                                    `}
                            >
                                <div></div>
                                {!isUpdatingAddress
                                    ? <div>Update Address</div>
                                    : <div className=" flex items-center justify-center gap-3">
                                        <AiOutlineLoading3Quarters size={30} className=" animate-spin" />
                                        Please wait...

                                    </div>
                                }
                            </button>
                        </form>
                    </div>

                </div>
            </MainLayout>
        </>
    )
}