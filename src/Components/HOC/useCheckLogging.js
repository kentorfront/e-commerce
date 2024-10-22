import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useCheckLogging() {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);
}
