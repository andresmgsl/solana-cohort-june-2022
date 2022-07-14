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
};

const NavElement = ({ label, href }:NavElementProps) => { 
    const router = useRouter();
    const isActive = href === router.asPath;

    return (
        <Link href={href} passHref> 
            <a 
                className={cn(
                    "h-20 flex flex-col justify-center",
                    isActive && "border-b-3 border-b-primary"
                )}
            >
                <Text 
                    variant="nav-heading" 
                    className={cn(
                        "capitalize",
                        isActive && "mt-1"
                    )}
                > 
                    {label} 
                </Text>
            </a>
        </Link>
    );
};

export default NavElement;