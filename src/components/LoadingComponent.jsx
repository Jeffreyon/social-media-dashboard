import BarLoader from 'react-spinners/BarLoader';

function LoadingComponent() {
    return (
        <div className="flex justify-center items-center h-screen animate__animated animate__fadeIn">
            <BarLoader />
        </div>
    );
}

export default LoadingComponent;
