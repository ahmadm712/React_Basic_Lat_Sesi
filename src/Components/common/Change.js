
import React, { useState ,useEffect} from 'react'


export default function ChangeCounter() {

    const [nama, setnama] = useState(false)
    const [nama2, setnama2] = useState(false)
    const [counter, setcounter] = useState(0)
    const [counter2, setcounter2] = useState(0)

    useEffect(() => {
        const fn = (oldState) =>{
            return oldState + 1
        }
        setcounter(fn)
    }, [nama])
    
    useEffect(() => {
        const fn = (oldState) =>{
            return oldState + 1
        }
        setcounter2(fn)
    }, [nama2]) //Component DidUpdate
    return (
        <React.Fragment>
            <p>Perubahan Nama : {counter}</p>
            <button onClick={()=>setnama(!nama)} className='btn btn-warning'>Ubah Nama 1</button>
            <p>Perubahan Nama2 : {counter2}</p>
            
            <button onClick={()=>setnama2(!nama2)} className='btn btn-warning'>Ubah Nama 2</button>
        </React.Fragment>
    )
}
