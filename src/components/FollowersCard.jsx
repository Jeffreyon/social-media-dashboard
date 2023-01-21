import DashboardContext from '../lib/DashboardContext';
import shortenThousand from '../lib/shortenThousand';
import showDirection from '../lib/showDirection';

function FollowersCard({ index }) {
    return (
        <DashboardContext.Consumer>
            {({ name, logo, userHandle, following }) => {
                return (
                    <div
                        id={`${name}`}
                        className={` bg-slate-100 hover:bg-slate-200 hover:cursor-pointer dark:bg-slate-700 dark:hover:bg-slate-600 md:w-1/2 text-center pt-8 pb-6 relative border-bar rounded-b-md animate__animated animate__fadeIn animate__zoomIn animate__delay-${index}s`}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <div>
                                <img
                                    src={logo}
                                    alt={`${name} logo`}
                                    className=" "
                                />
                            </div>
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-400">
                                {userHandle}
                            </p>
                        </div>
                        <div className="my-6">
                            <p className="dark:text-white text-5xl font-bold">
                                {shortenThousand(following.amount)}
                            </p>
                            <p className="mt-3 uppercase text-slate-600 dark:text-slate-400 tracking-widest text-xs">
                                {following.metricName}
                            </p>
                        </div>
                        {showDirection(following.change, ' Today')}
                    </div>
                );
            }}
        </DashboardContext.Consumer>
    );
}

export default FollowersCard;
