import { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import PageContext from "../Store";
import RecipeCard1 from "../components/RecipeCard/RecipeCard1";
const Recipes = () => {
    console.log("Recipe page call")
    const param = useParams();
    const ctx = useContext(PageContext);
    const [count, setCount] = useState(3);
    const [recipes, setRecipes] = useState([]);

    useEffect(()=> {
        console.log("useEffect recipes call");
        ctx.headerAlignment('text-left');
        ctx.setTitle('Recipes | Cook Note');
        var data = [];
        for(let i=1; i <= count; i++) {
            data.push(
            <div  key={i} className="col-lg-6 margin-bottom-30px">
              <RecipeCard1 recipeName={`recipe${i}`} rating={ Math.floor(Math.random() * (5 - 1 + 1)) + 1} />
              {/* <RecipeCard1  key={'r' + i}  recipeName={`recipe${i}`} rating={5} /> */}
            </div>)
        }
        setRecipes(data);
    }, [count])

    if (param.id) {
        return (
            <center>
                <p>Searching {param.id} recipes...</p>
            </center>
        )
    }

    const countHandler = () => {
        setCount(data => data + 1);
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
                    {recipes}
                </div>

                <div className="text-center">
                    <button onClick={countHandler} className="btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-second-color text-white">Show All Recipes</button>
                </div>

            </div>
        </Fragment>
    )
}

export default Recipes;