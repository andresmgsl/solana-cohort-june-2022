import FeaturedBountyCard from './featured-bounty-card';

const FeaturedSection = () => (
    <section
        title="featured"
        className="mt-24 w-full bg-gradient-to-tr from-primary to-secondary p-5 sm:p-8 md:px-16 lg:px-32 lg:py-16 xl:px-48 xl:py-20"
    >
        <div className="flex w-full flex-row gap-5">
            <FeaturedBountyCard />
            <FeaturedBountyCard />
        </div>
    </section>
);

export default FeaturedSection;
