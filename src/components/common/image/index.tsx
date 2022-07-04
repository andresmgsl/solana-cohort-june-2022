import NextImage from 'next/image';
import cn from 'utils';

/**
 * Properties for an interactable button component.
 */
 type ImageProps = {
    className?: string;
    height?: number;
    src: string;
    rest?: any;
};

const Image = ({ className, height, src, ...rest }: ImageProps) => {
    return (
        <div
            className={cn('_image-container', className)}
            style={height ? { height } : null}
        >
            <NextImage className="_image" layout="fill" src={src} {...rest} />
        </div>
    );
};

export default Image;