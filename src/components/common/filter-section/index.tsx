import {
    MdExpandMore,
    MdOutlineCategory,
    MdOutlineSearch,
    MdSort,
} from 'react-icons/md';

const FilterSection = () => (
    <>
        <div className="flex flex-col gap-4 text-sm text-white md:flex-row md:gap-2">
            <div className="flex max-h-40 grow rounded-full border bg-base/75 text-white">
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
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 flex items-center pl-4">
                    <MdOutlineSearch className="h-4 w-4" />
                </div>
                <input
                    className="block w-full rounded-full border border-white bg-base/75 py-3 pl-10 pr-6 uppercase tracking-wide placeholder:overflow-visible placeholder:text-base-content placeholder:opacity-50 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
                    placeholder="Search for bounties"
                    type="text"
                />
            </div>
        </div>
    </div>
    </>
);

export default FilterSection;
