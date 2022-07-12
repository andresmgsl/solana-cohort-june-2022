import ProfileSettings from './profile-settings';
const Settings = () => (
    <div className="mt-8">
        <div className="flex flex-col gap-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
            {/* <Hero /> */}
            <div className="flex flex-col gap-7">
                <h2 className="text-2xl font-medium text-white">Settings</h2>
                <ProfileSettings />
            </div>
        </div>
    </div>
);

export default Settings;
