import Button from 'components/common/button';
import { NextPage } from 'next';
import { MdChevronLeft } from 'react-icons/md';

const BountyDetail: NextPage = () => (
    <div className="mt-8">
        <Button text="Back" variant="outlined">
            <MdChevronLeft className="h-4 aspect-square" />
        </Button>
    </div>
);

export default BountyDetail;