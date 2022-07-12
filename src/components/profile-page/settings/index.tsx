import ProfileSettings from './profile-settings';
import { useState } from 'react';
import cn from 'utils';
import ProfileIntergrations from './profile-integrations';
const Settings = () => {
    const [selectedSettings, setSelectedSettings] = useState<string>('profile');
    const handleClick = () => {
        setSelectedSettings(
            selectedSettings === 'profile' ? 'integrations' : 'profile',
        );
    };
    return (
        <div className="mt-8">
            <div className="flex flex-col gap-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
                {/* <Hero /> */}
                <div className="flex flex-col gap-7">
                    <h2 className="text-2xl font-medium text-white">
                        Settings
                    </h2>
                    <div className="flex w-full gap-3 border-b border-[#666666]">
                        <button
                            onClick={handleClick}
                            disabled={selectedSettings === 'profile'}
                            className={cn(
                                'border-primary	 pb-3 text-lg font-medium text-white',
                                selectedSettings === 'profile'
                                    ? 'border-b-2'
                                    : '',
                            )}
                        >
                            Profile
                        </button>
                        <button
                            onClick={handleClick}
                            disabled={selectedSettings === 'integrations'}
                            className={cn(
                                'border-primary	 pb-3 text-lg font-medium text-white',
                                selectedSettings === 'integrations'
                                    ? 'border-b-2'
                                    : '',
                            )}
                        >
                            Intergrations
                        </button>
                    </div>
                    {selectedSettings === 'profile' ? (
                        <ProfileSettings />
                    ) : (
                        <ProfileIntergrations />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;
