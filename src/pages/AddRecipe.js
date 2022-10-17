import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { layoutActions } from "../Store";
const AddRecipe = () => {
	const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layoutActions.setTitle('Add Recipe'));
        dispatch(layoutActions.setHeaderAlignment('text-left'));
    }, [])
    return (
        <div className="container">
            <div className="margin-tb-45px full-width">
                <h4 className="padding-lr-30px padding-tb-20px background-white box-shadow border-radius-10"><i className="far fa-list-alt margin-right-10px text-main-color"></i>Basic Informations</h4>
                <div className="padding-30px padding-bottom-30px background-white border-radius-10">
                    <form>
                        <div className="form-group margin-bottom-20px">
                            <label><i className="far fa-list-alt margin-right-10px"></i> Recipe Title</label>
                            <input type="text" className="form-control form-control-sm" id="ListingTitle" placeholder="Listing Title" />
                        </div>
                        <div className="form-group margin-bottom-20px">
                            <div className="row">
                                <div className="col-md-6">
                                    <label><i className="far fa-folder-open margin-right-10px"></i> Category</label>
                                    <select className="form-control form-control-sm">
                                        <option>Fish</option>
                                        <option>Cocktails</option>
                                        <option>Eggs</option>
                                        <option>Salads</option>
                                        <option>Asian</option>
                                        <option>Pizza</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group margin-bottom-20px">
                                        <label><i className="far fa-flag margin-right-10px"></i> Keywords</label>
                                        <input type="text" className="form-control form-control-sm" id="ListingKeywords" placeholder="Keywords" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

            <div className="margin-bottom-45px full-width">
                <h4 className="padding-lr-30px padding-tb-20px background-white box-shadow border-radius-10"><i className="far fa-list-alt margin-right-10px text-main-color"></i>Description</h4>
                <div className="padding-30px padding-bottom-30px background-white border-radius-10">
                    <div className="margin-bottom-20px">
                        <textarea className="form-control" placeholder="Html Tag Enabled" id="exampleTextarea" rows="8"></textarea>
                    </div>
                    <div className="row">
                        <div className="col-md-6 margin-bottom-20px">
                            <label><i className="fas fa-video margin-right-10px"></i> Video URL</label>
                            <input type="text" className="form-control form-control-sm" placeholder="http://www./" />
                        </div>
                        <div className="col-md-6 margin-bottom-20px">
                            <label><i className="far fa-images margin-right-10px"></i> Image URL</label>
                            <input type="text" className="form-control form-control-sm" placeholder="http://www./" />
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg border-2  ba-1 text-white margin-bottom-80px btn-block border-radius-15 padding-15px box-shadow">Add Recipe</a>

        </div>
    )
}

export default AddRecipe;