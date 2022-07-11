import React from 'react';
import cn from 'utils';

/**
 * Properties for a card component.
 */
type CardProps = {
    className?: string;
    children?: React.ReactNode;
    blur?: boolean;
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
const Card = ({ className, children, blur = true }: CardProps) => (
    <div
        className={cn(
            className,
            blur && 'border border-white bg-base/75 backdrop-blur-lg backdrop-filter text-white',
            'rounded-3xl', // w-fit max-w-full 
        )}
    >
        {children}
    </div>
);

export default Card;
