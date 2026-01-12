import { useEffect, useState } from "react"
import type { InsertProduct } from "../../../dto/Product"
import { GetAllCategories } from "../../../api/FakeStoreApi"

type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
type Validator<T> = {
    [K in keyof T] : {
        validate: (value: T[K]) => boolean,
        message: string
    }
}

const ProductValidator: Validator<InsertProduct> = {
    title: {
        validate: (t) => t === "" || t === undefined || t?.length <= 3,
        message: "Title not valid"
    },
    category: {
        validate: (c) => c === "" || c === undefined,
        message: "Category not valid"
    },
    price: {
        validate: (p) => p === undefined || p <= 0,
        message: "Price not valid",
    },
    image: {
        validate: (i) => i === undefined || i === "",
        message: "Image url not valid"
    }
}

function InsertProduct(){
    const [insertProdData, setInsertProdData] = useState<InsertProduct>({})
    const [categories, setCategories] = useState<string[]>([])
    
    useEffect(() => {
        GetAllCategories()
        .then((data: string[]) => setCategories(data))
    }, [])

    const handleChangeData = (e: React.ChangeEvent<FormElement>) => {
        const { name, value } = e.currentTarget

        setInsertProdData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmitData = () => {

    }

    return (
        <div className="w-full h-full text-center">
            <h1>Insert new product</h1>

            <hr className="mt-4 mx-16" />

            <form onSubmit={handleSubmitData}>
                <div className="mt-5">
                    <input 
                        name="title"
                        type="text"
                        value={insertProdData.title}
                        onChange={(e) => handleChangeData(e)}
                        placeholder="Title..." 
                        className="form-field"
                        required
                    />
                </div>
                <div className="mt-5">
                    <textarea
                        name="description"
                        value={insertProdData.description}
                        onChange={(e) => handleChangeData(e)}
                        placeholder="Insert a description..." 
                        className="form-field resize-none"
                    />
                </div>
                <div className="mt-5 w-1/3 mx-auto grid grid-cols-3">
                    <select
                        name="category"
                        value={insertProdData.category}
                        onChange={(e) => handleChangeData(e)}
                        className={`form-field col-span-2 w-4/5 ${!insertProdData.category ? "text-neutral-400" : "text-white"}`}
                    >
                        <option className="text-neutral-400" key={"category"} value="">Category...</option>
                        {categories.length > 0 && categories.map((cat) => <option className="text-white" key={cat} value={cat}>{cat}</option>)}
                    </select>

                    <input 
                        name="price"
                        type="number"
                        value={insertProdData.price}
                        onChange={(e) => handleChangeData(e)}
                        placeholder="Price..." 
                        className="form-field w-4/5"
                        required
                    />
                </div>
                <div className="mt-5">
                    <input 
                        name="image"
                        type="text"
                        value={insertProdData.image}
                        onChange={(e) => handleChangeData(e)}
                        placeholder="Image url..." 
                        className="form-field"
                        required
                    />
                </div>
                <div className="w-1/3 mt-5 mx-auto text-left">
                    <button className="btn">Insert new product</button>
                </div>
            </form>
        </div>
    )
}

function validateFiled(data: InsertProduct){

}

export default InsertProduct