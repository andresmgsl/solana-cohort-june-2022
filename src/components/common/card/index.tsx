import React from 'react';
import cn from 'utils';

type CardProps = {
    className?: string;
    children?: React.ReactNode;
    blur?: string;
};

const blurClasses = {
    true: 'border border-white bg-[#26262B]/75 backdrop-blur-lg backdrop-filter',
    false: '',
};

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
