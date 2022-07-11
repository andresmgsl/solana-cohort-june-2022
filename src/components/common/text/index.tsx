import React from 'react';
import cn from 'utils';

/**
 * Properties for a card component.
 */
type TextProps = {
    variant: 'hero' | 'big-heading' | 'heading' | 'sub-heading' | 'paragraph' | 'input' | 'label';
    className?: string;
    children?: React.ReactNode;
};

/**
 * Pre-defined styling, according to agreed-upon design-system.
 */
 const styling = {
    hero: 'text-4xl font-medium leading-snug sm:leading-normal sm:text-6xl',
    'big-heading': 'text-4xl font-medium md:text-6xl',
    'heading': 'text-3xl font-medium',
    'sub-heading': 'text-2xl font-medium',
    paragraph: 'text-lg',
    input: 'text-sm uppercase tracking-wide',
    label: 'text-xs uppercase'
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
