import Card from "components/common/card";
import Chip from "components/common/chip";

/**
 * Properties for a "Featured Bounty" card component.
 */
 type FeaturedCardProps = {
    name: string;
    reward: string;
    tags: Array<{
        highlightValue?: string;
        value?: string;
        reversed?: boolean;
    }>;
};

const FeaturedBountyCard = ({ name, reward, tags }: FeaturedCardProps) => (
    <Card className="flex flex-row justify-between flex-shrink-0 w-98 h-52 p-6">
        <div className="flex flex-col justify-between w-full h-full">
            <div className="flex flex-col whitespace-nowrap">
                <h2 className="text-3xl text-ellipsis font-medium text-white">
                    {name}
                </h2>
                <h2 className="text-2xl font-medium text-primary">
                    ${reward}
                </h2>
            </div>
            <div className="flex flex-row flex-wrap justify-start items-end gap-1.5 w-full">
                { /* Map each element in the tags array to a Chip component */}
                {tags.map(({ value, highlightValue, reversed }) => (
                    <Chip
                        key={value}
                        highlightValue={highlightValue}
                        value={value}
                        reversed={reversed}
                    />
                ))}
            </div>
        </div>
        <div className="h-full aspect-square bg-white rounded-lg" />
    </Card>
);

export default FeaturedBountyCard;
