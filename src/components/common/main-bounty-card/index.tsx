import Chip from 'components/common/chip';
import { MdNavigateNext } from 'react-icons/md';
import Text from '../text';
type CardProps = {
    // the source of the bounty logo
    imageSource?: string;
    // title of the bounty
    bountyTitle?: string;
    // bounty prize
    bountyPrize?: string;
};

const BountyCard = ({ imageSource, bountyTitle, bountyPrize }: CardProps) => (
    <div className="align-center flex h-20 w-full gap-3 rounded-lg border bg-base px-2 text-white">
        <div className="my-2 mr-2">
            <img
                className="aspect-square h-full rounded-md"
                src={imageSource}
                alt="Bounty Logo"
            />
        </div>
        <div className="align-center flex flex-grow justify-between">
            <div className="my-auto">
                <Text variant="heading" className="  font-semibold">
                    {bountyTitle}
                </Text>
            </div>
            <div className="my-auto ">
                <Text
                    variant="paragraph"
                    className=" uppercase text-base-content opacity-50"
                >
                    Up to
                </Text>
                <h2 className="text-2xl font-semibold text-base-content">
                    {bountyPrize}
                </h2>
            </div>
            <div className="mt-3 flex max-h-5 flex-col gap-2">
                <div className="flex gap-2">
                    <Chip
                        highlightValue="Jun 4"
                        value="Placed"
                        reversed={true}
                    />
                    <Chip highlightValue="4" value="Participants" />
                </div>
                <div className="flex gap-2">
                    <Chip value="Category" />
                    <Chip value="Github tag" />
                </div>
            </div>
        </div>
        <div className="my-auto">
            <MdNavigateNext size={28} />
        </div>
    </div>
);

export default BountyCard;
