import StatItem from 'components/common/stat-item';
const StatsSection = () => (
    <section
        title="faq"
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
        <StatItem
            backgroundColor="#F07546"
            bountyName="Bounties1"
            bountyNumber="135"
            borderBottom="true"
            borderRight="true"
            removeBorderRightMedium="false"
        />
        <StatItem
            backgroundColor="#F07546"
            bountyName="Bounties2"
            bountyNumber="135"
            borderBottom="true"
            borderRight="true"
            removeBorderRightMedium="true"
        />
        <StatItem
            backgroundColor="#F07546"
            bountyName="Bounties3"
            bountyNumber="135"
            borderBottom="true"
            borderRight="true"
            removeBorderRightMedium="false"
        />
        <StatItem
            backgroundColor="#F07546"
            bountyName="Bounties4"
            bountyNumber="135"
            borderBottom="false"
            borderRight="false"
            removeBorderRightMedium="false"
        />
    </section>
);

export default StatsSection;
