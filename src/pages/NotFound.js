import { useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch } from "react-redux";
import {layoutActions } from "../Store";

const NotFound = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layoutActions.setTitle('Not Found'));
		dispatch(layoutActions.setHeaderAlignment('d-none'));
    }, [])
    return (
        <div className="container margin-bottom-100px">
            <div className="text-center">
                <img src="/img/404.png" alt="" />
                <h3 className="text-center">Page Not Found</h3>
                <h4 className="text-center text-grey-2">Ooops! The page you are looking for, couldn't be found.</h4>

                <Link to="/" className="btn btn-sm border-radius-30 margin-tb-15px text-white background-second-color  box-shadow padding-lr-25px margin-left-30px"><i className="fas fa-home  margin-right-7px"></i>  Go Home</Link>
            </div>
        </div>
    )
}

export default NotFound;