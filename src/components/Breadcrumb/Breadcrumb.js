import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
const Breadcrumb = () => {

    const location = useLocation();
    const [currentPath, setCurrentPath] = useState();
    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    return (
        <ol className="breadcrumb opacity-5">
            <li><Link to="/">Home</Link></li>
            {/* <li className="active">{currentPath}</li> */}
        </ol>
    )
}
export default Breadcrumb;