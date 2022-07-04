import Card from "components/common/card";
import Chip from "components/common/chip";

const FeaturedBountyCard = () => (
    <Card className="flex flex-row w-fit max-h-48 p-6">
        <div className="flex flex-col justify-between w-fit h-full">
            <div className="flex flex-col">
                <h2 className="text-3xl font-medium">
                    Bounty name
                </h2>
                <h2 className="text-2xl font-medium text-primary">
                    $10,000,000
                </h2>
            </div>
            <div className="flex flex-row flex-wrap gap-1.5 w-full">
                <Chip highlightValue="4" value="Participants" />
                <Chip highlightValue="4" value="Participants" />
                <Chip highlightValue="4" value="Participants" />
                <Chip highlightValue="4" value="Participants" />
            </div>
        </div>
        <div className="h-full aspect-square bg-white rounded-lg" />
    </Card>
);

export default FeaturedBountyCard;
