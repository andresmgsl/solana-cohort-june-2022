import {
    MdExpandMore,
    MdOutlineCategory,
    MdOutlineSearch,
    MdSort,
} from 'react-icons/md';

const FilterSection = () => (
    <>
        <div className="flex flex-col gap-5 text-sm text-white md:flex-row md:gap-2">
            <div className="flex max-h-40 grow rounded-full border bg-base/75 px-2 text-white">
                <div className="flex w-full justify-between">
                    <div className="flex w-1/2 items-center justify-between border-r px-4">
                        <div className="flex items-center gap-2 py-3">
                            <MdSort className="h-4 w-4" />
                            <p className="uppercase tracking-wide text-base-content opacity-50">
                                Sort by
                            </p>
                        </div>
                        <MdExpandMore className="h-4 w-4" />
                    </div>
                    <div className="flex w-1/2  items-center justify-between px-4">
                        <div className="flex items-center gap-2 py-3">
                            <MdOutlineCategory className="h-4 w-4" />
                            <p className="uppercase tracking-wide text-base-content opacity-50">
                                Tags
                            </p>
                        </div>
                        <MdExpandMore className="h-4 w-4" />
                    </div>
                </div>
            </div>
            <div className="flex max-h-40 justify-start rounded-full border bg-base/75 px-2 text-white md:justify-center">
                <div className="flex items-center gap-2 py-3 px-4">
                    <MdOutlineSearch className="h-4 w-4" />
                    <p className="uppercase tracking-wide text-base-content opacity-50">
                        Search for bounties
                    </p>
                </div>
            </div>
        </div>
        <div className="flex justify-between pt-4 text-base-content">
            <p className="m-auto uppercase">Basics</p>
            <p className="m-auto uppercase">Rewards</p>
            <p className="m-auto uppercase">Tags</p>
        </div>
    </>
);

export default FilterSection;
