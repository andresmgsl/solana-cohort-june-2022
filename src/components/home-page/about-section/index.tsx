import Button from 'components/common/button';
import Card from 'components/common/card';

const AboutSection = () => (
    <section title="about" className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
        <div className="flex h-auto flex-col">
            <Card blur="true">
                <div className="flex flex-col justify-between gap-10">
                    <div className="flex max-w-xl flex-col gap-5">
                        <h2 className="text-4xl text-[#e37542] font-medium md:text-6xl">
                            What are Bounties?
                        </h2>
                        <p className="text-lg text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed adipiscing volutpat tincidunt amet vulputate porta est. </p>
                    </div>
                    <Button text="Learn More" />
                </div>
            </Card>
        </div>
    </section>
);

export default AboutSection;
