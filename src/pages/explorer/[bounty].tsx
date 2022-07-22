import Button from 'components/common/button';
import NavElement from 'components/common/layout/header/nav-element';
import Text from 'components/common/text';
import AboutSection from 'components/detail-page/about-section';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { MdChevronLeft, MdLink } from 'react-icons/md';

const BountyDetail: NextPage = () => {
    const router = useRouter();
    const { bounty } = router.query;
    const currentTab = router.query.tab as string || "about";

    const tabs = [
        {id: 'about', section: <AboutSection createdAt={''} name={''} reward={0} tags={[]} />, label: 'About'},
        {id: 'details', section: <div></div>, label: 'Details'},
        {id: 'fund', section: <div></div>, label: 'Fund'},
    ];

    return (
        <div className="mt-8 flex flex-col gap-8 p-5 text-white sm:p-8 md:px-16 lg:px-32 lg:py-16 xl:px-48 xl:py-20">
            <div className="flex flex-row justify-between items-center">
                <Button text="Back" variant="label" reversed={true}>
                    <MdChevronLeft className="aspect-square h-4" />
                </Button>

                <div className="flex flex-row gap-3">
                    <Button text="Claim" variant="orange" />
                    <Button text="View on GitHub" variant="transparent">
                        <MdLink className="aspect-square h-4" />
                    </Button>
                </div>
            </div>

            <Text variant="big-heading">{bounty}</Text>

            <div className="flex h-12 flex-row gap-8 border-b-1.5 border-b-line">
                {tabs.map((tab, index) => (
                    <NavElement
                        key={tab.id}
                        label={tab.label}
                        href={`/explorer/${bounty}?tab=${tab.id}`}
                        as={index === 0 && `/explorer/${bounty}`}
                    />
                ))}
            </div>

            {tabs.find(tab => tab.id === currentTab).section}
        </div>
    );
};

export default BountyDetail;
