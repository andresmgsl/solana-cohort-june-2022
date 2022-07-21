import {
    MdExpandMore,
    MdOutlineCategory,
    MdOutlineSearch,
    MdSort,
} from 'react-icons/md';

const FilterSection = () => (
    <div>
        <div className="flex gap-3 text-white">
            <div className="flex max-h-48  w-2/3 max-w-full rounded-3xl border bg-base/75 p-2 text-white">
                <div className="flex w-full justify-between">
                    <div className="flex w-1/2  justify-between">
                        <div className="flex gap-1 pl-8">
                            <MdSort className="my-auto" />
                            <p className="uppercase text-base-content opacity-50 ">
                                Sort by
                            </p>
                        </div>
                        <MdExpandMore className="my-auto" />
                    </div>
                    <div className="flex w-1/2  justify-between">
                        <div className="flex gap-1 pl-8">
                            <MdOutlineCategory className="my-auto" />
                            <p className="uppercase text-base-content opacity-50">
                                Tags
                            </p>
                        </div>
                        <MdExpandMore className="my-auto" />
                    </div>
                </div>
            </div>
            <div className="flex max-h-48  w-1/3 max-w-full   rounded-3xl border  bg-base/75 p-2 text-white">
                <div className="flex gap-2 pl-5">
                    <MdOutlineSearch className="my-auto" />
                    {/* <input
                        id="search"
                        type="text"
                        placeholder="Search for bounties"
                        className="uppercase  opacity-50 bg-base/75 "
                    /> */}
                    <p className="uppercase text-base-content opacity-50">
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
    </div>
);

export default FilterSection;
