import { useEffect, useState } from "react"
import { GetAllCategories } from "../../utility/FakeStoreApi"

function SideBar(){
    const [categories, setCategories] = useState<string[]>([])

    useEffect(() => {
        GetAllCategories()
        .then((data: string[]) => setCategories(data))
    }, [])

    return (
        <div className="w-64 h-[calc(100vh-4rem)] bg-orange-700 fixed left-0 top-16">
            <h1 className="text-xl font-medium ml-2 mt-3">Categories</h1>
            <form className="ml-5 mt-1">
                <ul>
                    {/* {categories.map((cat) => <li><button className="hover:underline hover:text-amber-600 hover:cursor-pointer">{cat}</button></li>)} */}
                    {categories.map((cat) => <li key={cat}><input type="radio" name="category" value={cat} /><label className="pl-2">{cat}</label></li>)}
                </ul>

                <button className="fixed bottom-4 left-4 px-4 py-2 rounded-lg bg-amber-500 text-black">Applica filtri</button>
            </form>
        </div>
    )
}

export default SideBar