import {useSelector,useDispatch} from "react-redux";
import {incrCounter} from "../redux/store/CounterReducer.js";
import {decrCounter} from "../redux/store/CounterReducer.js";
import {useState} from "react";

const Counter = () => {
    const [value , setValue] = useState(1)

    const {counter} = useSelector(state => state.counter)

    const dispatch = useDispatch()

    const onIncr = () => {
        dispatch(incrCounter(value))
    }
    const onDecr = () => {
        dispatch(decrCounter(value))
    }


    return(

        <div>Counter : {counter}
            <input type="number" onChange={e => setValue(Number(e.target.value))}/>
            <button
                onClick={onDecr}
            >-</button>
            <button
                onClick={onIncr}>
                +
            </button>
        </div>

    )
}

export default Counter