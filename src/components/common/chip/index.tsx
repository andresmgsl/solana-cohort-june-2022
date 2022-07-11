import { cn } from 'utils';

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
    <div
        className={cn(
            'flex w-fit flex-row items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs uppercase',
            reversed && 'flex-row-reverse',
        )}
    >
        {highlightValue && (
            <p className="font-medium text-primary"> {highlightValue} </p>
        )}
        {value && <p className="text-white/50"> {value} </p>}
    </div>
);

export default Chip;
