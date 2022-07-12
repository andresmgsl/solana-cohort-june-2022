const ProfileIntergrations = () => (
    <div className="flex flex-grow flex-col gap-12">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <p className="my-auto text-lg uppercase	text-primary-focus lg:w-1/2">
                Full Name
            </p>
            <p className="my-auto rounded-xl border border-[#666666] p-2 px-4 text-lg text-primary-focus	 lg:w-1/2">
                John Doe
            </p>
        </div>
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <p className="my-auto text-lg uppercase	text-primary-focus lg:w-1/2">
                GitHub url
            </p>
            <p className="my-auto flex rounded-xl border border-[#666666] text-lg  text-primary-focus	 lg:w-1/2">
                <div className="border-r border-[#666666] p-2 px-4">
                    https://github.com/
                </div>
                <div className="my-auto px-4">UserName</div>
            </p>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
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
                    <button className="font-bold text-secondary">Update</button>
                    <button className="font-bold text-secondary">Delete</button>
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
);

export default ProfileIntergrations;
