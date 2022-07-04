import Chip from 'components/common/chip';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const BountyCard = CardProps => (
    <div className=" align-center mx-3 mt-20 flex h-20 gap-3 rounded-lg border bg-base px-2 text-white">
        <div className="my-2 mr-2">
            <img
                className="aspect-square h-full rounded-md"
                src="/dummyImg.png"
                alt="Bounty Logo"
            />
        </div>
        <div className="align-center flex flex-grow justify-between">
            <div className="my-auto">
                <h2 className="text-3xl  font-semibold">Bounty title</h2>
            </div>
            <div className="my-auto ">
                <p className="font-small uppercase text-base-content opacity-50">
                    Up to
                </p>
                <h2 className="text-2xl font-semibold text-base-content">
                    $10,000,000
                </h2>
            </div>
            <div className="mt-3 flex max-h-5 flex-col gap-2">
                <div className="flex">
                    <Chip highlightValue="Jun 4" value="Placed" />
                    <Chip highlightValue="4" value="Participants" />
                </div>
                <div className="flex">
                    <Chip value="Category" />
                    <Chip value="Github tag" />
                </div>
            </div>
        </div>
        <div className='my-auto'>
            <NavigateNextIcon />
        </div>
    </div>
);

export default BountyCard;
