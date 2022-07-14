import Card from "components/common/card";
import Chip from "components/common/chip";
import Text from "../text";

import { MdOutlineSearch } from "react-icons/md";

const SearchBar = () => (
    <Card className="flex flex-row items-center gap-5 w-fit max-h-full px-5 py-3 !rounded-full cursor-pointer">
        <MdOutlineSearch className="h-4 aspect-square" />
        <Text variant="label" className="text-secondary"> Search </Text>
        <Chip value="CTRL + K" />
    </Card>
);

export default SearchBar;
4