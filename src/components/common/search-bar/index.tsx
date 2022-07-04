import Card from "components/common/card";
import Chip from "components/common/chip";

const SearchBar = () => (
    <Card className="flex flex-row w-fit h-full !rounded-full">
        <p className="text-white/50 text-sm uppercase tracking-wide"> Search </p>
        <Chip value="CTRL + K" />
    </Card>
);

export default SearchBar;
