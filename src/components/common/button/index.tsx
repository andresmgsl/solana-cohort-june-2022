import cn from 'utils';

/**
 * 
 */
type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    variant?: string;
    text: string;
};

/**
 * 
 */
const variants = {
    black: 'border-transparent bg-black text-white',
    orange: 'border-transparent bg-sol-orange text-black',
    transparent: 'text-white',
};

/**
 * Definition of an interactable button component.
 * 
 * @param type `type` Attribute of the `<button>` element.
 * @param variant Variations relating to pre-defined styling of the element
 * @param text Text to display in the button.
 */
const Button = ({
    type = 'button',
    variant = 'black',
    text: value,
}: ButtonProps) => (
    <button
        className={cn(
            variants[variant],
            'flex h-fit w-fit items-center justify-center rounded-full border px-5 py-3 text-sm uppercase tracking-wide transition-all hover:-translate-y-[0.2rem] hover:bg-white hover:text-black active:translate-y-[0.05rem] active:scale-95',
        )}
        type={type}
    >
        {value}
    </button>
);

export default Button;
