import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Learn JavaScript",
      completed: true,
    },
    {
      id: 3,
      title: "Learn TypeScript",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  toggleCompeted: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
