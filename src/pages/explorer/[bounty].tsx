import Button from 'components/common/button';
import NavElement from 'components/common/layout/header/nav-element';
import Text from 'components/common/text';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { MdChevronLeft, MdLink } from 'react-icons/md';

const BountyDetail: NextPage = () => {
    const router = useRouter()
    const { bounty } = router.query

    return (
        <div className="flex flex-col gap-8 mt-8 text-white">
            <div className="flex flex-row justify-between">
                <Button text="Back" variant="transparent" reversed={true}>
                    <MdChevronLeft className="h-4 aspect-square" />
                </Button>

                <div className="flex flex-row gap-3">
                    <Button text="Claim" variant="orange" />
                    <Button text="View on GitHub" variant="transparent">
                        <MdLink className="h-4 aspect-square" />
                    </Button>
                </div>
            </div>

            <Text variant="big-heading">
                {bounty}
            </Text>

            <div className="h-12 flex flex-row gap-8 border-b-1.5 border-b-line">
                <NavElement label="About" href={`/explorer/${bounty}?page=about`} as={`/explorer/${bounty}`} />
                <NavElement label="Fund" href={`/explorer/${bounty}?page=fund`}  />
                <NavElement label="Details" href={`/explorer/${bounty}?page=details`} />
            </div> 
        </div>
    )
}

export default BountyDetail;