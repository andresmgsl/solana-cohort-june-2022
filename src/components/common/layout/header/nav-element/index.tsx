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
                    "group h-full flex flex-col justify-between items-center"
                )}
            >
                <Text variant="nav-heading"> {label} </Text>
                
                <div 
                    className={cn(
                        "w-1/4 h-1 transition-all duration-300 ease-out",
                        isActive ? "!w-full bg-primary" : "group-hover:bg-primary-focus group-hover:w-1/2"
                    )} 
                />
            </a>
        </Link>
    );
};

export default NavElement;