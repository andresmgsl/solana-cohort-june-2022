import Button from 'components/common/button';
import Card from 'components/common/card';
import Chip from 'components/common/chip';
import Text from 'components/common/text';
import { Bounty } from 'types/bounty';

const max = 8;

/**
 * Properties for a "Featured Bounty" card component.
 */
 type AboutSectionProps = Omit<Bounty, 'tags'> & {
    tags: Array<{
        highlightValue?: string;
        value?: string;
        reversed?: boolean;
    }>;
};

const AboutSection = ({
    createdAt,
    reward,
    tags,
}: AboutSectionProps) => (
    <section
        title="actions"
        className="flex flex-col gap-5"
    >
        <Text variant="label">
            Basics
        </Text> 

        <div className="flex flex-row ">
            <div className="aspect-square h-32 rounded-lg bg-white" />

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <Text variant="label" className="text-secondary"> Reward </Text>
                    <Text variant="heading"> <span className="text-primary"> {reward} </span> <span className="font-thin"> SOL </span> </Text>
                </div>

                <div className="flex flex-col gap-3">
                    <Text variant="label" className="text-secondary"> Tags </Text>
                
                    <div className="flex w-full flex-row flex-wrap gap-1.5">
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

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <Text variant="label" className="text-secondary"> Reward </Text>
                                
                </div>

                <div className="flex flex-col gap-3">
                    <Text variant="label" className="text-secondary"> Tags </Text>
                
                    <div className="flex w-full flex-row flex-wrap gap-1.5">
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
        </div>
    </section>
);

export default AboutSection;
