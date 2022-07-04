import Card from "components/common/card";
import Chip from "components/common/chip";

const SearchBar = () => (
    <Card className="flex flex-row gap-5 w-fit max-h-full px-5 !rounded-full cursor-pointer">
        <p className="text-white/50 text-sm uppercase tracking-wide"> Search </p>
        <Chip value="CTRL + K" />
    </Card>
);

export default SearchBar;
