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
            'flex h-fit w-98 flex-shrink-0 flex-col items-start justify-between gap-5 p-6',
            responsive && '!w-full 2lg:flex-row 2lg:items-center',
        )}
    >
        <div className="flex w-full max-w-full flex-row items-center gap-3">
            <div className="aspect-square h-16 w-16 rounded-lg bg-white" />
            <div className="flex flex-col overflow-hidden">
                <Chip
                    value="placed"
                    highlightValue={createdAt}
                    reversed={true}
                />
                <Text
                    variant="heading"
                    className={cn(
                        'inline w-full overflow-hidden text-ellipsis whitespace-nowrap',
                        responsive && '2lg:hidden',
                    )}
                >
                    {name}
                </Text>
                <Text
                    variant="sub-heading"
                    className={cn(
                        'hidden w-full overflow-hidden text-ellipsis whitespace-nowrap',
                        responsive && '2lg:inline',
                    )}
                >
                    {name}
                </Text>
            </div>
        </div>
        <div className="flex w-full flex-row items-center gap-5">
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
                <Text
                    variant="heading"
                    className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-primary"
                >
                    {numberToCurrencyString(reward)}
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
                <div className="flex w-full flex-row flex-wrap items-end justify-end gap-1.5">
                    {tags
                        .slice(0, max)
                        .map(({ value, highlightValue, reversed }) => (
                            <Chip
                                key={value}
                                highlightValue={highlightValue}
                                value={value}
                                reversed={reversed}
                                className="max-w-[4.25rem]"
                            />
                        ))}
                    {tags.length > max && (
                        <Chip highlightValue={`+${tags.length - max}`} />
                    )}
                </div>
            </div>
        </div>
    </Card>
);

export default FeaturedBountyCard;
