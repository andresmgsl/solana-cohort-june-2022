import StatItem from 'components/common/stat-item';
const StatsSection = () => (
    <section
        title="faq"
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
        <StatItem
            bountyName="Bounties1"
            bountyNumber="135"
            borderBottom="true"
            borderRight="true"
            removeBorderRightMedium="false"
        />
        <StatItem
            bountyName="Bounties2"
            bountyNumber="135"
            borderBottom="true"
            borderRight="true"
            removeBorderRightMedium="true"
        />
        <StatItem
            bountyName="Bounties3"
            bountyNumber="1000"
            borderBottom="true"
            borderRight="true"
            removeBorderRightMedium="false"
        />
        <StatItem
            bountyName="Bounties4"
            bountyNumber="135"
            borderBottom="false"
            borderRight="false"
            removeBorderRightMedium="false"
        />
    </section>
);

export default StatsSection;
