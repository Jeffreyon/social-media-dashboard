import DashboardContext from '../lib/DashboardContext';
import shortenThousand from '../lib/shortenThousand';
import showDirection from '../lib/showDirection';

function PlatformMetrics() {
    return (
        <DashboardContext.Consumer>
            {({ name, logo, otherMetrics }) => {
                return otherMetrics.map((metric) => {
                    return (
                        <div className="px-6 py-4 bg-slate-100 dark:bg-slate-700 rounded-md">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-slate-600 dark:text-slate-400">
                                    {metric.metricName}
                                </p>
                                <div>
                                    <img src={logo} alt={`${name} logo`} />
                                </div>
                            </div>
                            <div className="flex justify-between items-baseline mt-5">
                                <h2 className="text-3xl font-bold dark:text-white">
                                    {shortenThousand(metric.amount)}
                                </h2>
                                <p>{showDirection(metric.change, '%')}</p>
                            </div>
                        </div>
                    );
                });
            }}
        </DashboardContext.Consumer>
    );
}

export default PlatformMetrics;
