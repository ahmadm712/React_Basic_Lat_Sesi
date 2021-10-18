import React from 'react'

function ButtonFunction(props) {
    const { isActive, children, label } = props;

    const colorClassName = isActive ? "active" : "";
    return (
        <div className={colorClassName}>
        From Button Function : {label} 
        <hr />
        Children : {children}
        <button className="btn btn-warning text-dark">Dont Click </button>
    
      </div>
    )
}

export default ButtonFunction
