import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoBackToHome=()=>{
        navigate('/');
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="h-fit text-center space-y-2">
                <h2 className="text-red-500 text-7xl">404 !!!</h2>
                <button onClick={handleGoBackToHome} className="btn btn-primary">Back To Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;