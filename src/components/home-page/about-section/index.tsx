import Card from 'components/common/card';

const AboutSection = () => (
  <section title="about">
    <div className="flex h-auto flex-col">
      <Card 
        headerText='What are Bounties?'
        bodyText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed adipiscing volutpat tincidunt amet vulputate porta est.'
        buttonText='Learn More'
        shadowSize='md'
      />
    </div>
  </section>
);

export default AboutSection;
