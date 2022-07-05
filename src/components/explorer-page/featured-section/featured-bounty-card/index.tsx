import Card from "components/common/card";
import Chip from "components/common/chip";

const FeaturedBountyCard = () => (
    <Card className="flex flex-row gap-6 w-fit max-h-48 p-6" blur="true">
        <div className="flex flex-col justify-between max-w-xs h-full">
            <div className="flex flex-col whitespace-nowrap">
                <h2 className="text-3xl text-ellipsis font-medium text-white">
                    Bounty name
                </h2>
                <h2 className="text-2xl font-medium text-primary">
                    $10,000,000
                </h2>
            </div>
            <div className="flex flex-row flex-wrap justify-start items-end gap-1.5 w-full">
                <Chip highlightValue="4" value="Hunters" />
                <Chip highlightValue="4" value="Funders" />
                <Chip value="Category" />
                <Chip value="GitHub Tag" />
            </div>
        </div>
        <div className="h-full aspect-square bg-white rounded-lg" />
    </Card>
);

export default FeaturedBountyCard;
