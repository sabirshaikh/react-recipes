import { useContext, useEffect } from "react";
import PageContext from "../Store";
import { useHistory } from "react-router-dom";
const ProtectedPageRoute = (props) => {
    // return props.children;
    const history = useHistory();
    const ctx = useContext(PageContext);
    const {isAuthenticated} = ctx;
    
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