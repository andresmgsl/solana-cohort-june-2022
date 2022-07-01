import React from 'react';
import cn from 'utils';

/**
 * Properties for a card component.
 */
type CardProps = {
    className?: string;
    children?: React.ReactNode;
    blur?: string;
};

/**
 * Pre-defined styling, according to agreed-upon design-system.
 */
const blurClasses = {
    true: 'border border-white bg-[#26262B]/75 backdrop-blur-lg backdrop-filter text-white',
    false: '',
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
const Card = ({ className, children, blur = 'false' }: CardProps) => (
    <div
        className={cn(
            className,
            blurClasses[blur],
            'w-fit max-w-full items-center rounded-2xl',
        )}
    >
        {children}
    </div>
);

export default Card;
