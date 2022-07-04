/**
 * Properties for a card component.
 */
type ChipProps = {
    highlightValue?: string;
    value?: string;
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
const Chip = ({ highlightValue, value }: ChipProps) => (
    <div className='flex flex-row gap-1 w-fit px-2 py-1 items-center rounded-full text-sm uppercase bg-black/50'>
        {highlightValue && <p className="text-primary font-medium"> {highlightValue} </p>}
        {value && <p className="text-white/50"> {value} </p>}
    </div>
);

export default Chip;
