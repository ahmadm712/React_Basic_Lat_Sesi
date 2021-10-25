import styled from "styled-components";
import EditIcon from "../components/icons/edit";
import EyeIcon from "../components/icons/eye";
import TrashIcon from "../components/icons/trash";
import { Link } from "react-router-dom";

const StyledTodoDesc = styled.span`
  padding: 2px;
  font-size: 24px;
  color: black;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const StyledTodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 400px;
  padding: 8px;
  border: 1px solid black;
`;

export default function TodoItem(props) {
    const todo = props.todo;

  return (
    <StyledTodoItem>
      <StyledTodoDesc completed={todo.completed}>{todo.name}</StyledTodoDesc>
      <span>
        <Link to="/info">
          <EyeIcon />
        </Link>
        <Link to="/update">
          <EditIcon />
        </Link>

        <TrashIcon />
      </span>
    </StyledTodoItem>
  );
}
