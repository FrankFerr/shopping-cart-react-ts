import type { JSX } from "react";
import type { RatingStarProps } from "./RatingStarProps"
import { BsStar, BsStarFill, BsStarHalf} from "react-icons/bs";


    // <BsStar size={14}></BsStar>,
    // <BsStarFill size={14}></BsStarFill>,
    // <BsStarHalf size={14}></BsStarHalf>

function RatingStar({ rate }: RatingStarProps){
    const icons: JSX.Element[] = []

    const rateFloor = Math.floor(rate)
    const rateDecimal = rate - rateFloor
    let firstHalf: boolean = true
    console.log("rateFloor: ", rateFloor)
    console.log("rateDecimal: ", rateDecimal)
    for(let i = 1; i <= 5; i++){
        if(i <= rateFloor){
            icons.push(<BsStarFill/>)
        }
        else if(0.2 < rateDecimal && rateDecimal < 0.8 && firstHalf){
            icons.push(<BsStarHalf/>)
            firstHalf = false
        }
        else{
            icons.push(<BsStar/>)
        }
    }

    return (
        <span className="flex">{icons}</span>
    )
}

export default RatingStar