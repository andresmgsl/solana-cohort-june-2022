import Button from "../button";
import Chip from "components/common/chip";
import Text from "../text";

import { MdOutlineSearch } from "react-icons/md";

const SearchBar = () => (
    <Button variant="transparent">
        <MdOutlineSearch className="h-4 aspect-square" />
        {/* <Text variant="label" className="text-secondary"> Search </Text> */}
        <div> {/* className="hidden lg:flex" */}
            <Chip value="CTRL + K" />
        </div>
    </Button>
);

export default SearchBar;