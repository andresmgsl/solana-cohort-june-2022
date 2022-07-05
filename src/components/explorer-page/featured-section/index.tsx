import FeaturedBountyCard from './featured-bounty-card';

const FeaturedSection = () => (
    <section
        title="featured"
        className="flex w-full flex-col gap-7 bg-gradient-to-tr from-primary/75 to-secondary/75 p-5 sm:p-8 md:px-16 lg:px-32 lg:py-16 xl:px-48 xl:py-20"
    >
        <p className="text-sm font-light uppercase text-white"> Featured </p>
        <h2 className="text-4xl font-medium text-white md:text-6xl">
            Popular Bounties
        </h2>
        <div className="flex w-full snap-x flex-row gap-5 overflow-x-auto scroll-smooth">
            <FeaturedBountyCard />
            <FeaturedBountyCard />
            <FeaturedBountyCard />
        </div>
    </section>
);

export default FeaturedSection;
