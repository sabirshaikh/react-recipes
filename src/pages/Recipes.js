import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import PageContext from "../Store";
import RecipeCard1 from "../components/RecipeCard/RecipeCard1";
const Recipes = () => {

    const param = useParams();
    console.log("recipe id:", param.id);
    const ctx = useContext(PageContext);
    useEffect(() => {
        ctx.headerAlignment('text-left');
        ctx.setTitle('Recipes')
    }, [])


    if (param.id) {
        return (
            <center>
                <p>Searching {param.id} recipes...</p>
            </center>
        )
    }
    const RecipeBlock = () => {
        var data = [];
        for(let i=0; i <= 10; i++) {
            data.push(
            <div  key={i} className="col-lg-6 margin-bottom-30px">
              <RecipeCard1 recipeName={`recipe${i}`} rating={ Math.floor(Math.random() * (5 - 1 + 1)) + 1} />
            </div>)
        }
        return data;
    }

    return (
        <Fragment>
            <div className="container">
                <div className="margin-bottom-60px">
                    <div className="listing-search box-shadow">
                        <form className="row no-gutters">
                            <div className="col-md-4">
                                <div className="keywords">
                                    <input className="listing-form first" type="text" placeholder="Keywords..." value="" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="categories dropdown">
                                    <a className="listing-form d-block text-nowrap" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button className="dropdown-item text-up-small" type="button">Fish</button>
                                        <button className="dropdown-item text-up-small" type="button">Cocktails</button>
                                        <button className="dropdown-item text-up-small" type="button">Salads</button>
                                        <button className="dropdown-item text-up-small" type="button">Asian</button>
                                        <button className="dropdown-item text-up-small" type="button">Fish</button>
                                        <button className="dropdown-item text-up-small" type="button">Cocktails</button>
                                        <button className="dropdown-item text-up-small" type="button">Salads</button>
                                        <button className="dropdown-item text-up-small" type="button">Asian</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <a className="listing-bottom background-second-color box-shadow" href="#">Search Now</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container margin-bottom-100px">

                <div className="row">
                    <RecipeBlock />
                </div>

                <div className="text-center">
                    <a href="#" className="btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-second-color text-white">Show All Recipes</a>
                </div>

            </div>
        </Fragment>
    )
}

export default Recipes;