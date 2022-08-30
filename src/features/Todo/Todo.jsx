import React from "react";
import { useLocation } from "react-router-dom";
import { useFetchTodoQuery } from "./service/todo.service";

const Todo = () => {
  const { pathname } = useLocation();
  const userId = pathname.replace(/[^0-9]/g, "");
  const { data, isLoading } = useFetchTodoQuery({ id: userId });

  return (
    <div>
      {isLoading ? (
        <p>Data is Loading</p>
      ) : (
        data?.map((todo, i) => <p key={i}>{todo?.title}</p>)
      )}
    </div>
  );
};

export default Todo;
