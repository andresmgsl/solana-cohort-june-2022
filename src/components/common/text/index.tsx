import React from 'react';
import cn from 'utils';

/**
 * Properties for a card component.
 */
type TextProps = {
    variant:
        | 'hero'
        | 'big-heading'
        | 'heading'
        | 'sub-heading'
        | 'nav-heading'
        | 'paragraph'
        | 'input'
        | 'label';
    className?: string;
    children?: React.ReactNode;
};

/**
 * Pre-defined styling, according to agreed-upon design-system.
 */
 const variants = {
    hero: 'text-4xl font-medium leading-snug sm:leading-normal sm:text-6xl',
    'big-heading': 'text-4xl font-medium md:text-6xl',
    'heading': 'text-3xl font-medium',
    'sub-heading': 'text-2xl font-medium',
    'nav-heading': 'text-lg font-medium sm:text-xl',
    paragraph: 'text-lg',
    input: 'text-sm uppercase tracking-wide',
    label: 'text-xs uppercase'
};

/**
 * Definition of a card component,the main purpose of 
 * which is to neatly display information. Can be both 
 * interactive and static.
 * 
 * @param variant Variations relating to pre-defined styling of the element.
 * @param className Custom classes to be applied to the element.
 * @param children Child elements to be rendered within the component.
 */
const Text = ({ variant, className, children }: TextProps) => (
    <text
        className={cn(
            className,
            variants[variant]
        )}
    >
        {children}
    </text>
);

export default Text;
