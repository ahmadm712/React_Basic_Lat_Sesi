// import ButtonClass from "./Components/common/button_class";
// import ButtonFunction from "./Components/common/button_fc";

// import ClassComponent from "./Components/layout/ClassComponent";
// import FormComponent from "./Components/layout/FormComponent";
// import ListName from "./Components/layout/ListName";
// import Notification from "./Components/layout/Notification";
// import Todo from "./Components/layout/Todo";
import InputText from "./Components/common/Input_text";
// import Counter from "./Components/Counter";
// import CounterAppFunction from "./Components/Counter_fc";


function App() {
  // const users = [
  //   { id: "1", firstname: "agus", lastname: "Nuerjaman" },
  //   { id: "2", firstname: "udin", lastname: "jaja" },
  // ];

  // const label = "Button Class";
  // const label2 = "Button Class 2";
  // const labelfc = "Button Function";

  function Click(){
    console.log('Clicked')
  }

  return (
    <div className="container">
      {/* <h1 className="title">LATIHAN</h1>
      <Todo todoName="Todo1" />
      <h1>Ini Latihan</h1>
      <ClassComponent />
      <ListName data={users}/>
      <Notification status='succes'/>
      <FormComponent/> */}

      {/* Pertemuan tngl 18 */}
      {/* <ButtonClass label={label} isActive={false}>
        <p>Test Bro</p>
      </ButtonClass>
      <ButtonClass children={<p>HOHO</p>} label={label2} isActive={true}/>
      <hr/>
      <ButtonFunction label={labelfc} children={<p>Ini dari Function</p>} isActive={false}/> */}
      {/* <Counter/>
      <CounterAppFunction /> */}


      

      <InputText/>
      <button className="btn btn-primary mt-3" onClick={Click}>
        Save
      </button>


    </div>
  );
}

export default App;
