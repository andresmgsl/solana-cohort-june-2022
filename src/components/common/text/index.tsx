import React from 'react';
import cn from 'utils';

/**
 * Properties for a card component.
 */
type TextProps = {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'button' | 'label';
    className?: string;
    children?: React.ReactNode;
};

/**
 * Pre-defined styling, according to agreed-upon design-system.
 */
 const styling = {
    h1: 'text-3xl font-bold',
    h2: 'text-2xl font-bold',
    h3: 'text-xl font-bold',
    h4: 'text-lg font-bold',
    h5: 'text-md font-bold',
    h6: 'text-sm font-bold',
    p: 'text-base',
    button: 'text-base',
    label: 'text-base'
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
const Text = ({ variant, className, children }: TextProps) => (
    <div
        className={cn(
            className,
            styling[variant]
        )}
    >
        {children}
    </div>
);

export default Text;
