import { createContext, useState, FC } from "react";
import { Todo } from "../models/models";


type TodosContextState = {
    todos: Todo[];
    CompletedTodos: Todo[],
    setTodos: (todo: Todo[]) => void;
    setCompletedTodos: (todo: Todo[]) => void;
  };
const contextDefaultValues: TodosContextState = {
  todos: [],
  CompletedTodos: [],
  setTodos: () => {},
  setCompletedTodos: () => {}
};

export const TodosContext = createContext<TodosContextState>(
  contextDefaultValues
);

const TodosProvider: FC = ({ children  }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [CompletedTodos, setCompletedTodos] = useState<Todo[]>([]);


  return (
    <TodosContext.Provider  value={{
        todos,
        setTodos,
        setCompletedTodos,
        CompletedTodos
      }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;