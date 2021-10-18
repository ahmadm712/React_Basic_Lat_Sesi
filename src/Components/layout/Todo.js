import React from 'react'

function Todo(props) {
    // console.log(props.todoName); 
    function clicKer() {
        console.log('Clicked')
    }
    return (
        <div>
            {/* <h1>TODOO BRO</h1>   */}
            <p>
                Todo Name : {props.todoName}
            </p>   
            <button onClick={clicKer}> Click this Dude</button>     

        </div>
    )
}

export default Todo



