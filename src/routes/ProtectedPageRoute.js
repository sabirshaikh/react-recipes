import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const ProtectedPageRoute = (props) => {
    // return props.children;
    const history = useHistory();
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
    
    useEffect(() => {
        if(!isAuthenticated) {
            history.push("/singup");
        }
    }, [isAuthenticated]);
    
    if(isAuthenticated) {
        return props.children;
    }
}

export default ProtectedPageRoute;