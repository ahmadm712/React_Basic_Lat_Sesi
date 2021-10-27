import React from "react";

import TodoItem from "../components/TodoItem";

export default function ListPage() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    // FIXME: fetch from api
    // sementara kita HARDCODE dulu.
    const staticTodos = [
      {
        userId: 1,
        id: 1,

        title: "delectus aut autem",
        completed: true,
      },
      {
        userId: 1,
        id: 2,

        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
      {
        userId: 1,
        id: 3,

        title: "fugiat veniam minus",
        completed: false,
      },
    ];
    setTodos(staticTodos);
  }, []); // depedencies empty => lifecyle ComponentDidMount

  return (
    <React.Fragment>
      <ul>
        {todos.map((value, index) => {
          // each value adalah object
          return <TodoItem key={value.id} todo={value} />;
        })}
      </ul>
    </React.Fragment>
  );
}
