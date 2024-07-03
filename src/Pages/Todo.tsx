import TodoContainar from "@/components/Todo/Todo.containar";
import Containar from "@/components/ui/Containar";

const todo = () => {
  return (
    <Containar>
      <h1 className="text-center text-3xl font-serif my-12 ">My Todos</h1>
      <TodoContainar></TodoContainar>
    </Containar>
  );
};

export default todo;
