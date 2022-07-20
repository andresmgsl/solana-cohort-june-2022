import NextImage from 'next/image';
import { cn } from 'utils';

/**
 * Properties for an interactable button component.
 */
 type ImageProps = {
    className?: string;
    height?: number;
    width?: number;
    src: string;
    alt?: string;
    rest?: any;
};

const Image = ({ className, height, width, src, alt, ...rest }: ImageProps) => (
    <div
        className={cn('_image-container', className)}
        style={{
            height: height ? `${height}px` : null,
            width: width ? `${width}px` : null,
        }}
    >
        <NextImage className="_image" layout="fill" src={src} alt={alt} {...rest} />
    </div>
);

export default Image;