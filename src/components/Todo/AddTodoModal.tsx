import { FormEvent, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch } from "@/redux/hooks";
import { addTodo } from "@/redux/features/todoSlice";
import { useAddTodoMutation } from "@/redux/api/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setdescription] = useState("");
  const [Priority, setPriority] = useState("");

  // For local state menegament
  //  const dispatch = useAppDispatch();

  //for server
  const [addTodo, { isLoading, isSuccess, isError }] = useAddTodoMutation();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // const randomString = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      title: task,
      description,
      isCompleted: false,
      Priority,
    };

    // dispatch(addTodo(taskDetails));

    console.log('Inside Model', taskDetails);


    addTodo(taskDetails);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mr-6 bg-primary-gradient p-3 rounded-lg text-xl font-serif text-white">
          Add Todo
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Save Your Todo </DialogTitle>
          <DialogDescription>
            Add Your Tasks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input 
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                description
              </Label>
              <Input
                onBlur={(e) => setdescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Priority
              </Label>
              <Select onValueChange={(value) => setPriority(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="High">High Priority</SelectItem>
                    <SelectItem value="Medium">Medium Priority</SelectItem>
                    <SelectItem value="Low">Low Priority</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end ">
            <DialogClose asChild>
              <button
                type="submit"
                className="mr-6 bg-primary-gradient p-3 rounded-lg text-xl font-serif text-white clear-start"
              >
                Save Todo
              </button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
