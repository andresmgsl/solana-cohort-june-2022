import FeaturedBountyCard from './featured-bounty-card';

const FeaturedSection = () => (
    <section
        title="featured"
        className="flex flex-col gap-7 mt-24 w-full bg-gradient-to-tr from-primary/75 to-secondary/75 p-5 sm:p-8 md:px-16 lg:px-32 lg:py-16 xl:px-48 xl:py-20"
    >
        <p className="text-sm text-white uppercase font-light"> Featured </p>
        <h2 className="text-4xl font-medium text-white md:text-6xl">
            Popular Bounties
        </h2>
        <div className="flex flex-row gap-5 w-full overflow-x-auto scroll-smooth snap-x">
            <FeaturedBountyCard />
            <FeaturedBountyCard />
            <FeaturedBountyCard />
        </div>
    </section>
);

export default FeaturedSection;
