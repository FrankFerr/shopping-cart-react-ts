import { useEffect, useState, memo } from "react"
import { GetAllCategories } from "../../utility/FakeStoreApi"
import type { SideBarProps } from "./SideBarProps"
import { type PartialSideBarFilter } from "./SideBarFilter"

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

        const filter: PartialSideBarFilter = {}

        const category = formData.get("category") as string | null

        if(category !== "all" && category !== null)
            filter.category = category

        const rangePrice = formData.get("rangePrice") as string
        if(rangePrice !== "-1"){
            const prices: string[] = rangePrice.split("-")

            filter.priceRangeMin = Number(prices[0])
            filter.priceRangeMax = Number(prices[1])
        }

        onChangeFilter(filter)
    }

    return (
        <div className="w-64 h-[calc(100vh-4rem)] bg-orange-700 fixed left-0 top-16">
            <form className="ml-5 mt-1" onSubmit={handleSubmit}>
                {
                    categories.length > 0 ?
                    <>
                    <h1 className="text-xl font-medium mt-3">Categories</h1>
                    <ul className="ml-3">
                        <li><input type="radio" name="category" value={"all"} defaultChecked/><label className="pl-2">All</label></li>
                        {categories.map((cat) => <li key={cat}><input type="radio" name="category" value={cat} /><label className="pl-2">{cat}</label></li>)}
                    </ul>
                    </> : ""
                }

                <h1 className="text-xl font-medium mt-3">Price range</h1>
                <ul className="ml-3">
                    <li><input type="radio" name="rangePrice" value={"-1"} defaultChecked/><label className="pl-2">All</label></li>
                    {priceRange.map((range) => <li key={range}><input type="radio" name="rangePrice" value={range} /><label className="pl-2">{range}</label></li>)}
                </ul>

                <button type="submit" className="fixed bottom-4 left-4 px-4 py-2 rounded-lg bg-amber-500 text-black">Apply filter</button>
            </form>
        </div>
    )
}

export default memo(SideBar)