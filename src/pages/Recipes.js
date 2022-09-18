import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import PageContext from "../Store";
const Recipes = () => {
    const ctx = useContext(PageContext);
    useEffect(() => {
        ctx.headerAlignment('text-left');
    }, [])
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
                    <div className="col-lg-6 margin-bottom-30px">
                        <div className="background-white thum-hover box-shadow hvr-float full-width">
                            <div className="float-md-left margin-right-30px thum-xs">
                                <img className="width-250px" src="/img/recipes-1.jpg" alt="" />
                            </div>
                            <div className="padding-25px">
                                <div className="rating">
                                    <ul>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h3><Link to={`/recipes/${'sabir'}`} href="#" className="d-block text-dark text-capitalize text-medium margin-tb-15px">Slow Cooker Loaded Potato Soup</Link></h3>
                                <hr />
                                <div className="row no-gutters">
                                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 margin-bottom-30px">
                        <div className="background-white thum-hover box-shadow hvr-float full-width">
                            <div className="float-md-left margin-right-30px thum-xs">
                                <img className="width-250px" src="/img/recipes-2.jpg" alt="" />
                            </div>
                            <div className="padding-25px">
                                <div className="rating">
                                    <ul>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h3><Link to={`recipe`} href="#" className="d-block text-dark text-capitalize text-medium margin-tb-15px">Slow Cooker Loaded Potato Soup</Link></h3>
                                <hr />
                                <div className="row no-gutters">
                                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 margin-bottom-30px">
                        <div className="background-white thum-hover box-shadow hvr-float full-width">
                            <div className="float-md-left margin-right-30px thum-xs">
                                <img className="width-250px" src="/img/recipes-3.jpg" alt="" />
                            </div>
                            <div className="padding-25px">
                                <div className="rating">
                                    <ul>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h3><Link to={`recipe`} href="#" className="d-block text-dark text-capitalize text-medium margin-tb-15px">Slow Cooker Loaded Potato Soup</Link></h3>
                                <hr />
                                <div className="row no-gutters">
                                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 margin-bottom-30px">
                        <div className="background-white thum-hover box-shadow hvr-float full-width">
                            <div className="float-md-left margin-right-30px thum-xs">
                                <img className="width-250px" src="/img/recipes-4.jpg" alt="" />
                            </div>
                            <div className="padding-25px">
                                <div className="rating">
                                    <ul>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h3><Link to={`recipe`} href="#" className="d-block text-dark text-capitalize text-medium margin-tb-15px">Slow Cooker Loaded Potato Soup</Link></h3>
                                <hr />
                                <div className="row no-gutters">
                                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 margin-bottom-30px">
                        <div className="background-white thum-hover box-shadow hvr-float full-width">
                            <div className="float-md-left margin-right-30px thum-xs">
                                <img className="width-250px" src="/img/recipes-5.jpg" alt="" />
                            </div>
                            <div className="padding-25px">
                                <div className="rating">
                                    <ul>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h3><Link to={`recipe`} href="#" className="d-block text-dark text-capitalize text-medium margin-tb-15px">Slow Cooker Loaded Potato Soup</Link></h3>
                                <hr />
                                <div className="row no-gutters">
                                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 margin-bottom-30px">
                        <div className="background-white thum-hover box-shadow hvr-float full-width">
                            <div className="float-md-left margin-right-30px thum-xs">
                                <img className="width-250px" src="/img/recipes-6.jpg" alt="" />
                            </div>
                            <div className="padding-25px">
                                <div className="rating">
                                    <ul>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h3><Link to={`recipe`} href="#" className="d-block text-dark text-capitalize text-medium margin-tb-15px">Slow Cooker Loaded Potato Soup</Link></h3>
                                <hr />
                                <div className="row no-gutters">
                                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 margin-bottom-30px">
                        <div className="background-white thum-hover box-shadow hvr-float full-width">
                            <div className="float-md-left margin-right-30px thum-xs">
                                <img className="width-250px" src="/img/recipes-1.jpg" alt="" />
                            </div>
                            <div className="padding-25px">
                                <div className="rating">
                                    <ul>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h3><Link to={`recipe`} href="#" className="d-block text-dark text-capitalize text-medium margin-tb-15px">Slow Cooker Loaded Potato Soup</Link></h3>
                                <hr />
                                <div className="row no-gutters">
                                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 margin-bottom-30px">
                        <div className="background-white thum-hover box-shadow hvr-float full-width">
                            <div className="float-md-left margin-right-30px thum-xs">
                                <img className="width-250px" src="/img/recipes-1.jpg" alt="" />
                            </div>
                            <div className="padding-25px">
                                <div className="rating">
                                    <ul>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h3><Link to={`recipe`} href="#" className="d-block text-dark text-capitalize text-medium margin-tb-15px">Slow Cooker Loaded Potato Soup</Link></h3>
                                <hr />
                                <div className="row no-gutters">
                                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 margin-bottom-30px">
                        <div className="background-white thum-hover box-shadow hvr-float full-width">
                            <div className="float-md-left margin-right-30px thum-xs">
                                <img className="width-250px" src="/img/recipes-2.jpg" alt="" />
                            </div>
                            <div className="padding-25px">
                                <div className="rating">
                                    <ul>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h3><Link to={`recipe`} href="#" className="d-block text-dark text-capitalize text-medium margin-tb-15px">Slow Cooker Loaded Potato Soup</Link></h3>
                                <hr />
                                <div className="row no-gutters">
                                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 margin-bottom-30px">
                        <div className="background-white thum-hover box-shadow hvr-float full-width">
                            <div className="float-md-left margin-right-30px thum-xs">
                                <img className="width-250px" src="/img/recipes-3.jpg" alt="" />
                            </div>
                            <div className="padding-25px">
                                <div className="rating">
                                    <ul>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li className="active"></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h3><Link to={`recipe`} href="#" className="d-block text-dark text-capitalize text-medium margin-tb-15px">Slow Cooker Loaded Potato Soup</Link></h3>
                                <hr />
                                <div className="row no-gutters">
                                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    

                </div>

                <div className="text-center">
                    <a href="#" className="btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-second-color text-white">Show All Recipes</a>
                </div>

            </div>
        </Fragment>
    )
}

export default Recipes;