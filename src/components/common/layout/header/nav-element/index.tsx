/* eslint-disable @typescript-eslint/ban-types */
import Text from 'components/common/text';
import Link from 'next/link';
import { cn } from 'utils';
import { useRouter } from "next/router";

/**
 * Properties for an interactable navigation element.
 */
 type NavElementProps = {
    label: string;
    href: string;
    as?: string;
};

const NavElement = ({ label, href, as }:NavElementProps) => { 
    const router = useRouter();
    const isActive = href === router.asPath || (as && as === router.asPath);

    console.log(router);

    return (
        <Link href={href} as={as} passHref> 
            <a 
                className={cn(
                    "group h-full flex flex-col justify-between"
                )}
            >
                <Text variant="nav-heading"> {label} </Text>
                
                <div 
                    className={cn(
                        "w-full transition-all",
                        isActive ? "h-1 bg-primary" : "h-px group-hover:bg-primary-focus"
                    )} 
                />
            </a>
        </Link>
    );
};

export default NavElement;