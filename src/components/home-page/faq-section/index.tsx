import Accordion from './accordion';

const FaqSection = () => (
    <section
        title="faq"
        className="px-4 sm:px-8 md:gap-32 md:px-16 lg:px-32 xl:px-48"
    >
        <div className="flex flex-col gap-8">
            <h2 className="text-lg text-white">FAQ</h2>
            <p className="text-4xl font-medium text-white md:text-6xl">
                Find out more about Bounties
            </p>
            <div className="flex flex-col md:w-2/3 md:self-end">
                <Accordion />
            </div>
        </div>
    </section>
);

export default FaqSection;
