import { cn, numberToCurrencyString } from 'utils';

import { Bounty } from 'types/bounty';
import Card from 'components/common/card';
import Chip from 'components/common/chip';
import Text from 'components/common/text';

const max = 5;

/**
 * Properties for a "Featured Bounty" card component.
 */
type FeaturedCardProps = Omit<Bounty, 'tags'> & {
    responsive?: boolean;
    tags: Array<{
        highlightValue?: string;
        value?: string;
        reversed?: boolean;
    }>;
};

const FeaturedBountyCard = ({
    createdAt,
    name,
    reward,
    tags,
    responsive = true,
}: FeaturedCardProps) => (
    <Card
        className={cn(
            "flex flex-col justify-between items-start gap-5 flex-shrink-0 w-98 h-fit p-6",
            responsive && "!w-full 2lg:flex-row 2lg:items-center"
        )}>
        <div className="flex flex-row gap-3 items-center w-full max-w-full">
            <div className="h-16 w-16 aspect-square bg-white rounded-lg" />
            <div className="flex flex-col overflow-hidden">
                <Chip
                    value="placed"
                    highlightValue={createdAt}
                    reversed={true}
                />
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
        <div className="flex w-full flex-row items-start gap-5 2lg:items-center">
            <div className="flex h-full w-40 flex-col gap-1 overflow-hidden">
                <Text
                    variant="label"
                    className={cn(
                        'inline text-secondary',
                        responsive && '2lg:hidden',
                    )}
                >
                    Reward · SOL
                </Text>
                <Text variant="heading" className="max-w-full text-primary overflow-hidden text-ellipsis whitespace-nowrap">
                    {reward}
                </Text>
            </div>
            <div className="flex w-full flex-col items-end gap-1">
                <Text
                    variant="label"
                    className={cn(
                        'inline w-fit text-secondary',
                        responsive && '2lg:hidden',
                    )}
                >
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
