import Card from "components/common/card";
import Chip from "components/common/chip";
import Text from "components/common/text";
import cn from "utils";

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
    responsive?: boolean;
};

const FeaturedBountyCard = ({ name, reward, tags, responsive = true }: FeaturedCardProps) => (
    <Card 
        className={cn(
            "flex flex-col justify-between items-start gap-5 flex-shrink-0 w-98 h-fit p-6",
            responsive && "!w-full 2lg:flex-row 2lg:items-center"
        )}>
        <div className="flex flex-row gap-3 items-center w-full max-w-full">
            <div className="h-16 w-16 aspect-square bg-white rounded-lg" />
            <div className="flex flex-col overflow-hidden">
                <Chip value="placed" highlightValue="11 Jul" reversed={true} /> {/* TODO: Add prop to make date customizable. */}
                <Text 
                    variant="heading" 
                    className={cn(
                        "w-full overflow-hidden text-ellipsis whitespace-nowrap inline",
                        responsive && "2lg:hidden"
                    )}>
                    {name}
                </Text>
                <Text 
                    variant="sub-heading" 
                    className={cn("w-full overflow-hidden text-ellipsis whitespace-nowrap hidden",
                        responsive && "2lg:inline"
                    )}>
                    {name}
                </Text>
            </div>
        </div>
        <div className="flex flex-row items-center gap-5 w-full">
            <div className="flex flex-col gap-1 w-40 h-full overflow-hidden">
                <Text 
                    variant="label" 
                    className={cn("opacity-50 inline",
                        responsive && "2lg:hidden"
                    )}>
                        Reward · SOL
                </Text>
                <Text variant="heading" className="max-w-full text-primary overflow-hidden text-ellipsis whitespace-nowrap">
                    {reward}
                </Text>
            </div>
            <div className="flex flex-col items-end gap-1 w-full">
                <Text 
                    variant="label" 
                    className={cn("w-fit pacity-50 inline",
                        responsive && "2lg:hidden"
                    )}>
                        Tags
                </Text>
                <div className="flex flex-row flex-wrap justify-end items-end gap-1.5 w-full">
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
