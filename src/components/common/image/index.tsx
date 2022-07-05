import NextImage from 'next/image';
import cn from 'utils';

/**
 * Properties for an interactable button component.
 */
 type ImageProps = {
    className?: string;
    height?: number;
    src: string;
    alt?: string;
    rest?: any;
};

const Image = ({ className, height, src, alt, ...rest }: ImageProps) => (
    <div
        className={cn('_image-container', className)}
        style={height ? { height } : null}
    >
        <NextImage className="_image" layout="fill" src={src} alt={alt} {...rest} />
    </div>
);

export default Image;