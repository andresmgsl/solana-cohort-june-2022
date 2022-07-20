/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { MdOutlineSettings } from 'react-icons/md';
import Stars from './stars';

type HeroProps = {
    fullName: string;
    isOwnProfile: boolean;
    username: string;
};

const Hero = ({ fullName, isOwnProfile, username }: HeroProps) => (
    <div className="flex flex-col">
        <div className="h-60 w-full rounded-tl-[theme(spacing.24)] bg-gradient-to-tr from-primary/75 to-secondary/75" />
        <div className="flex flex-row justify-between gap-12 px-2 md:px-6">
            <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                <img
                    alt="avatar"
                    className="-mt-7 flex aspect-square h-32 w-max rounded-full border-4 border-white md:h-36"
                    src="avatar.png"
                />
                <div className="flex flex-col gap-3 md:mt-6">
                    <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-2">
                        <h2 className="text-3xl font-medium text-white">
                            {fullName}
                        </h2>
                        <p className="text-sm uppercase tracking-wide text-primary">
                            @{username}
                        </p>
                    </div>
                    <Stars rating={3} size="md" />
                </div>
            </div>
            <div className="mt-6">
                {isOwnProfile && (
                    <Link href="/settings" passHref>
                        <MdOutlineSettings color="#999999" size={32} />
                    </Link>
                )}
            </div>
        </div>
    </div>
);

export default Hero;
