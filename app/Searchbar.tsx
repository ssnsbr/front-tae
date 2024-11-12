import { AiOutlineSearch } from "react-icons/ai";
import { TextField } from "@radix-ui/themes";
import strings from "../dictionaries/fa.json";

const Searchbar = () => (
  <TextField.Root className="w-full max-w-xs rounded-full bg-gray-100 dark:bg-gray-700 px-4 py-2 flex items-center">
    <TextField.Slot>
      <AiOutlineSearch className="text-gray-500 dark:text-gray-400" size="16" />
    </TextField.Slot>
    <input
      type="text"
      placeholder={strings.Search}
      className="bg-transparent border-none outline-none text-sm w-full dark:text-white ml-2"
    />
  </TextField.Root>
);

export default Searchbar;
