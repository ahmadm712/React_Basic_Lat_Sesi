import { useSelector } from "react-redux";

export default function Counter(){

    const counterReducer = useSelector(state => state.counterReducer)
    return(
        <h3>Nilai : {counterReducer}</h3>
    )
}