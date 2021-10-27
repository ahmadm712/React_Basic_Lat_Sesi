import { useDispatch } from "react-redux"
import { increment, decrement } from "../actions"
export default function Button(){

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    return(
        <div>
            <button onClick={handleIncrement}>
                +
            </button>
            <button onClick={handleDecrement}>
                -
            </button>
        </div>
    )
}