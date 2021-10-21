import React, { useState } from "react";


function TextInput(props) {
    const [value, setvalue] = useState("")
    return(
        <input
          type={props.type}
          value={value}
          onChange={((e) => setvalue(e.currentTarget.value))}
          placeholder={props.placeholder}
          className="form-control"
        />
    );
}



export default function FormFunction() {
  const [name, setName] = useState("Ahmad");
  const [email, setEmail] = useState("Ahmad@gmail.com");
  const [password, setPassword] = useState("123");

  

//   const onChangeName = (e) => {
//     const value = e.currentTarget.value;
//     setName(value);
//   };
  return (
    <React.Fragment>
      <form action="">
        <TextInput type='text' placeholder='Your Name'/>
        <TextInput type='email' placeholder='Your Email'/>
        <TextInput type='password' placeholder='Your Password'/>

        <hr />


         {/* <input
          type="text"
          value={email}
          onChange={((e) => setEmail(e.currentTarget.value))}
          placeholder="Your Email"
          className="form-control"
        />
         <input
          type="text"
          value={password}
          onChange={((e) => setPassword(e.currentTarget.value))}
          placeholder="Your Password"
          className="form-control"
        /> */}
      </form>
      <ul>
        <li>Name : {name}</li>
        <li>Email : {email}</li>
        <li>Password : {password}</li>
      </ul>
    </React.Fragment>
  );
}
