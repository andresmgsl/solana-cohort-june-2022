const ProfileSettings = () => (
    <div className="flex flex-col gap-10 lg:flex-row">
        {/* Images div */}
        <div
            style={{ maxWidth: 350 }}
            className="mx-auto rounded-3xl border-2 bg-base lg:mx-0"
        >
            <div className="flex justify-center gap-2">
                <div className="p-3">
                    <img
                        alt="avatar"
                        className="  aspect-square h-14 w-max rounded-full  md:h-20"
                        src="avatar.png"
                    />
                </div>
                <div style={{ maxWidth: 220 }} className="max-w-56 my-auto">
                    <p className="text-lg uppercase	text-primary-focus">
                        Avatar
                    </p>
                    <p className="text-lg	leading-none text-secondary">
                        Picture representig your public profile.
                    </p>
                </div>
            </div>
            <div className="mx-3 my-2 flex gap-3 border-b border-base-content pb-5">
                <button className="m-auto w-2/3 rounded-3xl border border-white p-2 uppercase text-white">
                    Update
                </button>
                <button className="m-auto w-1/3 rounded-3xl border border-secondary p-2 uppercase text-[#F64B62]">
                    Delete
                </button>
            </div>
            <div className="p-2">
                <img
                    alt="avatar"
                    className="m-auto  	 w-max rounded-lg  "
                    src="dummyHolder.png"
                />
            </div>
            <div className="mx-3 my-2 flex flex-col gap-3">
                <p className="text-lg uppercase	text-primary-focus">Cover</p>
                <p className="text-lg	leading-none text-secondary">
                    Background image shown behind your profile image
                </p>
            </div>
            <div className="mx-3 my-2 flex gap-3   py-3">
                <button className="m-auto w-2/3 rounded-3xl border border-white p-2 uppercase text-white">
                    Update
                </button>
                <button className="m-auto w-1/3 rounded-3xl border border-secondary p-2 uppercase text-[#F64B62]">
                    Delete
                </button>
            </div>
        </div>
        {/* form div */}
        <div className="flex flex-grow flex-col gap-12">
            <div className="flex flex-col justify-between gap-10 xl:flex-row">
                <p className="my-auto text-lg uppercase	text-primary-focus xl:w-1/2">
                    Full Name
                </p>
                <p className="my-auto rounded-xl border border-[#666666] p-2 px-4 text-lg text-primary-focus	 xl:w-1/2">
                    <input
                        className=" w-full bg-black  tracking-wide placeholder:overflow-visible placeholder:text-base-content  focus:outline-none"
                        placeholder="John Doe"
                        type="text"
                    />
                </p>
            </div>
            <div className="flex flex-col justify-between gap-10 2xl:flex-row">
                <p className="my-auto w-1/3 text-lg uppercase	text-primary-focus 2xl:w-1/2">
                    GitHub url
                </p>
                <p className="my-auto flex rounded-xl border border-[#666666] text-lg  text-primary-focus	 2xl:w-1/2">
                    <div className="my-auto border-r  border-[#666666] p-2 px-4">
                        https://github.com/
                    </div>
                    <div className="my-auto px-4">
                        <input
                            className=" w-full bg-black tracking-wide placeholder:overflow-visible placeholder:text-base-content focus:outline-none"
                            placeholder="UserName"
                            type="text"
                        />
                    </div>
                </p>
            </div>
            <div className="flex flex-col gap-5 xl:flex-row">
                <div className="my-auto w-1/2">
                    <p className="my-auto  text-lg	uppercase text-primary-focus">
                        Avatar
                    </p>
                    <p className="my-auto  text-lg	 text-secondary">
                        This will be your profile picture.
                    </p>
                </div>
                <div className="flex flex-grow justify-between">
                    <div className="my-auto p-3">
                        <img
                            alt="avatar"
                            className="  aspect-square h-14 w-max rounded-full  md:h-20"
                            src="avatar.png"
                        />
                    </div>
                    <div className="flex gap-5">
                        <button className="font-bold text-secondary">
                            Update
                        </button>
                        <button className="font-bold text-secondary">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="my-auto w-1/2">
                    <p className="my-auto  text-lg	uppercase text-primary-focus">
                        Cover
                    </p>
                    <p className="my-auto  text-lg	 text-secondary">
                        This will be your profile cover.
                    </p>
                </div>
                <div className="p-2">
                    <img
                        alt="avatar"
                        className="m-auto  	 w-max rounded-lg  "
                        src="dummyHolder.png"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default ProfileSettings;
