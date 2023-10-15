"use client"

import { useRouter } from "next/navigation"
import { createContext, useState, useContext } from "react"

const Context = createContext();

const Provider = ({children}) => {
    const router = useRouter()
   
    const [isItemSaved, setIsItemSaved] = useState(false)

    const getSave = () => {
        let save = []
        if (typeof localStorage !== "undefined") {
            save = JSON.parse(localStorage.getItem('save')) || []

        }
        return save
    }

    const addToSave = (product) => {
        let save = []
        if (typeof localStorage !== "undefined") {
            save = JSON.parse(localStorage.getItem('save')) || []

        }
        save.push(product);
        localStorage.setItem('save', JSON.stringify(save));
        isItemAddedToSave(product)
        router.refresh()
    } 

    const removeFromSave = (product) => {
        let save = []
        if (typeof localStorage !== "undefined") {
            save = JSON.parse(localStorage.getItem('save')) || []

        }
        save = save.filter(item => item.id !== product.id);
        localStorage.setItem('save', JSON.stringify(save));
        isItemAddedToSave(product)
        router.refresh()

    }

    const isItemAddedToSave = (product) => {
        let save = []
        if (typeof localStorage !== "undefined") {
            save = JSON.parse(localStorage.getItem('save')) || []

        }
        save = save.filter(item => item.id === product.id);

        if (save.length > 0) {
            setIsItemSaved(true)
            return
        }
        setIsItemSaved(false)

    }

    const saveCount = () => {
        let save = []
        if (typeof localStorage !== "undefined") {
            save = JSON.parse(localStorage.getItem('save')) || []

        }
        return save.length

    }

    const saveTotal = () => {
        let total = 0
        let save = []
        if (typeof localStorage !== "undefined") {
            save = JSON.parse(localStorage.getItem('save')) || []

        }

        for (let i = 0; i < save.length; i++) {
            const element = save[i];
            total += element.price
        }

        return total

    }

    const clearSave = () => {
        localStorage.removeItem('save')
        router.refresh()
    }

    const exposed = {
        isItemSaved,
        getSave,
        addToSave,
        removeFromSave,
        isItemAddedToSave,
        saveCount,
        saveTotal,
        clearSave,
    }

    return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export const useSave = () => useContext(Context);

export default Provider;