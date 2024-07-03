import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCread from "./Todo.Cread";
import TodoFilter from "./TodoFilter";
import { useGetTodoQuery } from "@/redux/api/api";

const TodoContainar = () => {
  const [Priority, setPriority] = useState("");
  const { data: todos, isLoading, isError } = useGetTodoQuery(Priority);

  if (isLoading) {
    return <p>Loading......</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter Priority={Priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-lg p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-5">
          {todos?.data && todos?.data.length > 0 ? (
            todos?.data.map((item : any) => <TodoCread {...item} />)
          ) : (
            <div className="bg-red-400 text-black text-center p-3 rounded-lg">
              <p className="text-lg font-serif">There are No Todos Pending!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainar;
