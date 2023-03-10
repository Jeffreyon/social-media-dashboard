import { useContext } from 'react';
import { useState, useEffect } from 'react';
import DashboardContext from './lib/DashboardContext';

import Switch from './components/Switch/Switch';
import FollowersCard from './components/FollowersCard';
import PlatformMetrics from './components/PlatformMetrics';
import LoadingComponent from './components/LoadingComponent';

import numberWithCommas from './lib/numberWithCommas';

function App() {
    let platforms = useContext(DashboardContext);
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    let totalFollowers = platforms.reduce((sum, prev) => {
        return sum + prev.following.amount;
    }, 0);

    return (
        <div className={darkMode ? ' dark' : ''}>
            {loading ? (
                <LoadingComponent />
            ) : (
                <div className="text-slate-900 dark:bg-slate-900 animate__animated animate__fadeIn">
                    <div className=" bg-slate-50 dark:bg-slate-800 pt-8 pb-40 px-6">
                        <div className="max-w-6xl mx-auto sm:flex items-center justify-between">
                            <div>
                                <h1 className=" text-2xl sm:text-3xl font-bold dark:text-white">
                                    Social Media Dashboard
                                </h1>
                                <p className=" text-slate-500 dark:text-slate-400 font-semibold mt-1">
                                    Total Followers:{' '}
                                    {numberWithCommas(totalFollowers)}
                                </p>
                            </div>
                            <div className="flex justify-between sm:justify-start gap-2 mt-4 pt-4 border-t dark:border-slate-700 sm:border-none sm:m-0 sm:p-0">
                                <p className="font-semibold text-slate-500 dark:text-slate-400">
                                    Dark mode
                                </p>
                                <Switch
                                    isOn={darkMode}
                                    handleToggle={toggleDarkMode}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pb-28 px-6 ">
                        <div className=" flex flex-col md:flex-row max-w-6xl mx-auto gap-7 -mt-28">
                            {platforms.map((platform, ii) => {
                                return (
                                    <DashboardContext.Provider
                                        key={ii}
                                        value={platform}
                                    >
                                        <FollowersCard index={ii} />
                                    </DashboardContext.Provider>
                                );
                            })}
                        </div>
                        <div className="max-w-6xl mx-auto mt-10">
                            <h1 className=" text-xl sm:text-2xl font-bold text-slate-500 dark:text-white">
                                Overview Today
                            </h1>
                            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-7 mt-6">
                                {platforms.map((platform, ii) => {
                                    return (
                                        <DashboardContext.Provider
                                            key={ii}
                                            value={platform}
                                        >
                                            <PlatformMetrics index={ii} />
                                        </DashboardContext.Provider>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col sm:flex-row gap-6 justify-center items-center p-2 text-slate-700 pb-8">
                        <a
                            href="https://jeffreyon.netlify.app"
                            className="  hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors delay-75"
                        >
                            Made by Jeffrey Onuigbo
                        </a>

                        <a
                            href="https://github.com/Jeffreyon/social-media-dashboard"
                            className=" hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors delay-75"
                        >
                            View code
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
