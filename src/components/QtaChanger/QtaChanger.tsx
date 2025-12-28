import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import type { QtaChangerProps } from "./QtaChangerProps";

function QtaChanger({ qta, onPlus, onSubtract, onDelete }: QtaChangerProps){
    const button = qta === 1 ? <button className="cursor-pointer" onClick={onDelete}><FaTrash/></button> : <button className="cursor-pointer" onClick={onSubtract}><FaMinus/></button>

    return (
        <div className="w-24 h-fit px-2 flex justify-between items-center border-2 border-amber-400 rounded-2xl">
            {button}
            {qta}
            <button className="cursor-pointer" onClick={onPlus}><FaPlus /></button>
        </div>
    )
}

export default QtaChanger