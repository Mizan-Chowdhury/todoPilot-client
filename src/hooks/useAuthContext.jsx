import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const useAuthContext = () => {
    return useContext(AuthContext);
};

export default useAuthContext;