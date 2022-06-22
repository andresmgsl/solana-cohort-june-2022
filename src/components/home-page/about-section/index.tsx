import Card from 'components/common/card';
const AboutSection = () => (
    <section
        title="about"
        className=" flex bg-black px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48"
    >
        <div className="order-2 -ml-52 opacity-75 bg-blend-overlay md:w-1/2">
            <img src="/back.webp" alt="" />
        </div>

        <div className="order-1 my-auto flex h-auto flex-col">
            <Card
                headerText="What are Bounties?"
                bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed adipiscing volutpat tincidunt amet vulputate porta est."
                buttonText="Learn More"
                shadowSize="md"
            />
        </div>
    </section>
);

export default AboutSection;
