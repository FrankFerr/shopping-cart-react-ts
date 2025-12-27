import type { JSX } from "react";
import type { RatingStarProps } from "./RatingStarProps"
import { BsStar, BsStarFill, BsStarHalf} from "react-icons/bs";

function RatingStar({ rate, star = 5 }: RatingStarProps){
    const icons: JSX.Element[] = []

    const rateFloor = Math.trunc(rate)
    const rateDecimal = Math.round((rate - rateFloor) * 10) / 10
    let firstTimeDecimal: boolean = true

    for(let i = 1; i <= star; i++){
        if(i <= rateFloor){
            icons.push(<BsStarFill key={i} color="rgb(245, 245, 61)"/>)
        }
        else if(0.2 < rateDecimal && rateDecimal < 0.8 && firstTimeDecimal){
            icons.push(<BsStarHalf key={i} color="rgb(245, 245, 61)"/>)
            firstTimeDecimal = false
        }
        else if(0.8 <= rateDecimal && firstTimeDecimal){
            icons.push(<BsStarFill key={i} color="rgb(245, 245, 61)"/>)
            firstTimeDecimal = false
        }
        else{
            icons.push(<BsStar key={i}/>)
        }
    }

    return (
        <span className="flex">{icons}</span>
    )
}

export default RatingStar