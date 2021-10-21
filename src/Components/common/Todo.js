import React,{ useState ,useEffect } from "react";



export default function Todo() {
  const [todos, addTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const slice = data.slice(0, 10).map((item) => item.title);
        console.log(slice);
        addTodos(slice);
      })
      .catch((err) => console.error(err));

    const interval = setInterval(() => {
      console.log("stream data");
    }, 500);

    return () => {
      // code yang kita gunakan untuk memberishkan state.
      // componentWillUnmount
      clearInterval(interval);
    };
  }, []); // kosong. artinya => componentDidMount

  console.log("render");
  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.currentTarget.value)}
          placeholder="add todo..."
          className='form-control-sm my-2'
        />
        <button
            className='btn-sm btn-primary ml-2'
          onClick={() => {
            // const cloned = todos.concat([newTodo]);
            const cloned = [...todos, newTodo];
            addTodos(cloned);
          }}
        >
          Tambah Todo
        </button>
      </div>
      <ul>
        {todos.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </React.Fragment>
  );
}
