import { cn } from 'utils';
import Text from '../text';

/**
 * Properties for a card component.
 */
type ChipProps = {
    highlightValue?: string;
    value?: string;
    reversed?: boolean;
};

/**
 * Definition of a card component,the main purpose of
 * which is to neatly display information. Can be both
 * interactive and static.
 *
 * @param className Custom classes to be applied to the element.
 * @param children Child elements to be rendered within the component.
 * @param blur Whether or not to apply a blur-effect.
 */
const Chip = ({ highlightValue, value, reversed }: ChipProps) => (
    <div className={cn(
            "flex flex-row gap-1 w-fit px-2 py-1 items-center rounded-full bg-black/50",
            reversed && "flex-row-reverse",
        )}
    >
        <Text variant="label">
            {highlightValue && <span className="text-primary font-medium"> {highlightValue} </span>}
            {value && <span className="text-white/50"> {value} </span>}
        </Text>
    </div>
);

export default Chip;
