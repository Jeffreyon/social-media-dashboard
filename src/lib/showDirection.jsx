import iconDown from '../assets/icon-down.svg';
import iconUp from '../assets/icon-up.svg';

function showDirection(amount, label) {
    let trend;
    if (amount >= 0) {
        trend = (
            <div className=" text-emerald-500 dark:text-emerald-400 flex items-center gap-1 justify-center text-sm font-semibold">
                <div>
                    <img src={iconUp} />
                </div>
                <p>
                    {amount}
                    {label}
                </p>
            </div>
        );
    } else {
        trend = (
            <div className=" text-red-500 flex items-center gap-1 justify-center text-sm font-semibold">
                <div>
                    <img src={iconDown} />
                </div>
                <p>
                    {-amount}
                    {label}
                </p>
            </div>
        );
    }

    return trend;
}

export default showDirection;
