import Card from "components/common/card";
import Chip from "components/common/chip";
import Text from "components/common/text";

const max = 5;

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
    <Card className="flex flex-col justify-between gap-5 items-start flex-shrink-0 w-98 h-fit p-6">
        <div className="flex flex-row gap-3 items-center max-w-full">
            <div className="h-16 w-16 aspect-square bg-white rounded-lg" />
            <div className="flex flex-col overflow-hidden">
                <Chip value="placed" highlightValue="11 Jul" reversed={true} /> {/* TODO: Add prop to make date customizable. */}
                <Text variant="heading" className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    {name}
                </Text>
            </div>
        </div>
        <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-1 w-40 h-full overflow-hidden">
                <Text variant="label" className="opacity-50">
                        Reward · SOL
                </Text>
                <Text variant="heading" className="max-w-full text-primary overflow-hidden text-ellipsis whitespace-nowrap">
                    {reward}
                </Text>
            </div>
            <div className="flex flex-col gap-1 w-full">
                <Text variant="label" className="opacity-50">
                        Tags
                </Text>
                <div className="flex flex-row flex-wrap justify-start items-end gap-1.5 w-full">
                    {tags.slice(0, max).map(({ value, highlightValue, reversed }) => (
                        <Chip
                            key={value}
                            highlightValue={highlightValue}
                            value={value}
                            reversed={reversed}
                            className="max-w-[4.25rem]"
                        />
                    ))}
                    {tags.length > max && <Chip highlightValue={`+${(tags.length - max)}`} />}
                </div>
            </div>
        </div>
    </Card>
);

export default FeaturedBountyCard;
