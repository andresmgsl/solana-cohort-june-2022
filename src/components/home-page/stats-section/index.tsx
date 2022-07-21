import StatItem from 'components/common/stat-item';

const Stats = [
    {
        bountyName: 'Bounties1',
        bountyNumber: '135',
        borderBottom: 'true',
        borderRight: 'true',
        removeBorderRightMedium: 'false',
    },
    {
        bountyName: 'Bounties2',
        bountyNumber: '135',
        borderBottom: 'true',
        borderRight: 'true',
        removeBorderRightMedium: 'true',
    },
    {
        bountyName: 'Bounties3',
        bountyNumber: '1000',
        borderBottom: 'true',
        borderRight: 'true',
        removeBorderRightMedium: 'false',
    },
    {
        bountyName: 'Bounties4',
        bountyNumber: '135',
        borderBottom: 'false',
        borderRight: 'false',
        removeBorderRightMedium: 'false',
    },
];

const StatsSection = () => (
    <section
        title="faq"
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
        {Stats.map(
            ({
                bountyName,
                bountyNumber,
                borderBottom,
                borderRight,
                removeBorderRightMedium,
            }) => (
                <StatItem
                    key={bountyName}
                    bountyName={bountyName}
                    bountyNumber={bountyNumber}
                    borderBottom={borderBottom}
                    borderRight={borderRight}
                    removeBorderRightMedium={removeBorderRightMedium}
                />
            ),
        )}
    </section>
);

export default StatsSection;
