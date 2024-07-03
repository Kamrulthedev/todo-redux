import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

const TodoFilter = ({Priority, setPriority} : any) => {

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <button className="mr-6 bg-primary-gradient p-3 rounded-lg text-xl font-serif text-white">Filter</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Filter My Todo</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={Priority} onValueChange={setPriority}>
            <DropdownMenuRadioItem value="High">high</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Medium">mediam</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Low">low</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
};

export default TodoFilter;