import { useEffect, useState } from "react"
import { GetAllCategories } from "../../utility/FakeStoreApi"
import type { SideBarProps } from "./SideBarProps"
import { SideBarFilter } from "./SideBarFilter"

function SideBar({ onChangeFilter }: SideBarProps){
    const priceRange: string[] = [
        "0-50",
        "50-100",
        "100-200",
        "200-1000"
    ]

    const [categories, setCategories] = useState<string[]>([])

    useEffect(() => {
        GetAllCategories()
        .then((data: string[]) => setCategories(data))
    }, [])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)

        const filter = new SideBarFilter()
        filter.category = formData.get("category") as string | null
        filter.category = filter.category === "all" ? null : filter.category

        const rangePrice = formData.get("rangePrice") as string | null
        if(rangePrice !== null && rangePrice !== "-1"){
            const prices = rangePrice.split("-")

            filter.priceRangeMin = Number(prices[0])
            filter.priceRangeMax = Number(prices[1])
        }

        onChangeFilter(filter)
    }

    return (
        <div className="w-64 h-[calc(100vh-4rem)] bg-orange-700 fixed left-0 top-16">
            <form className="ml-5 mt-1" onSubmit={handleSubmit}>
                <h1 className="text-xl font-medium ml-2 mt-3">Categories</h1>
                <ul>
                    {/* {categories.map((cat) => <li><button className="hover:underline hover:text-amber-600 hover:cursor-pointer">{cat}</button></li>)} */}
                    <li><input type="radio" name="category" value={"all"} defaultChecked/><label className="pl-2">Tutti</label></li>
                    {categories.map((cat) => <li key={cat}><input type="radio" name="category" value={cat} /><label className="pl-2">{cat}</label></li>)}
                </ul>

                <h1 className="text-xl font-medium ml-2 mt-3">Range di prezzo</h1>
                <ul>
                    <li><input type="radio" name="rangePrice" value={"-1"} defaultChecked/><label className="pl-2">Tutti</label></li>
                    {priceRange.map((range) => <li key={range}><input type="radio" name="rangePrice" value={range} /><label className="pl-2">{range}</label></li>)}
                </ul>

                <button type="submit" className="fixed bottom-4 left-4 px-4 py-2 rounded-lg bg-amber-500 text-black">Applica filtri</button>
            </form>
        </div>
    )
}

export default SideBar