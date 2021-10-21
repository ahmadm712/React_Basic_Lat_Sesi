import React, { useState } from 'react';




export default function Counter() {
    const  [state, setState] = useState(0)


    return (
        <div>
            <p>Counter {state}</p>
            <button onClick={() => setState(state + 1) } className='btn btn-warning'>Tambah</button>
        </div>
    )
}
