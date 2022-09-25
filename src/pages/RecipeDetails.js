import { Fragment, useContext, useEffect } from "react"
import { useParams } from "react-router-dom";
import PageContext from "../Store";
import CategoryCard from "../components/RecipeCategoryCard/CategoryCard";
const RecipeDetails = () => {
    const params = useParams();
    const ctx = useContext(PageContext);
    
    useEffect(() => {
        ctx.headerAlignment('text-left');
        ctx.setTitle(params.id + ' | Cook Note');
    }, [])

    const Category = ctx.recipeCategory.map((data, index)=> {
        return (
          <div className="col-6 margin-bottom-25px" key={'cat' + index}>
            <CategoryCard key={'catCard' + index} categoryName={data.name}  image={data.image}/>
          </div>
        )
      })
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="margin-bottom-40px card border-0 box-shadow">
                        <div className="card-img-top"><a href="#"><img src="/img/recipes-single.jpg" alt="" /></a></div>
                        <div className="padding-lr-30px padding-tb-20px">
                            <h5 className="margin-bottom-20px margin-top-10px"><a className="text-dark" href="#">Slow Cooker Loaded Potato Soup</a></h5>
                            <div className="rating">
                                <ul>
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li className="active"></li>
                                    <li></li>
                                </ul>
                            </div>
                            <hr />
                            <h3>Ingredients</h3>
                            <ul>
                                <li><strong>16 oz</strong> rotini noodles</li>
                                <li><strong>24 oz</strong> spaghetti sauce (prego traditional)</li>
                                <li><strong>1/2 lb</strong> ground beef</li>
                                <li><strong>15 oz</strong> ricotta cheese</li>
                                <li><strong>14 oz</strong> mozzarella shredded</li>
                                <li><strong>1 can</strong> sliced olives</li>
                                <li><strong>1 packages</strong> pepperoni slices</li>
                            </ul>
                            <h3>Method</h3>
                            <ol>
                                <li>preheat oven to 350º</li>
                                <li>bring noodles to a boil then drain</li>
                                <li>while noodles are cooking in a bowl mix ricotta cheese, mozzarella cheese and olives together. it will be thick</li>
                                <li>cook ground beef then drain</li>
                                <li>add spaghetti sauce to ground beef</li>
                                <li>add pasta to beef and sauce mix, stir until well blended then move to 16x9 casserole dish</li>
                                <li>spread cheese mixture all over evenly</li>
                                <li>place pepperonis on top snd remember to partially overlap pepperonis since they shrink</li>
                                <li>back in 350º oven for 20 minutes</li>
                            </ol>
                            <hr />
                            <div className="row no-gutters">
                                <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                                <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                            </div>
                        </div>
                        <div className="background-light-grey border-top-1 border-grey padding-lr-30px padding-tb-20px">
                            <a href="#" className="d-inline-block text-grey-3 h6 margin-bottom-0px margin-right-15px"><img src="/img/zoal-8.jpg" className="height-30px border-radius-30 margin-right-15px" alt="" /> Salim Aldos/ ery</a>
                        </div>
                    </div>


                    <div className="margin-bottom-40px box-shadow">
                        <div className="padding-30px background-white">
                            <h3><i className="far fa-star margin-right-10px text-main-color"></i> Review &amp; Rating</h3>
                            <hr />

                            <ul className="commentlist padding-0px margin-0px list-unstyled text-grey-3">
                                <li className="border-bottom-1 border-grey-1 margin-bottom-20px">
                                    <img src="/img/testimonial-1.png" className="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt="" />
                                    <div className="margin-left-85px">
                                        <a className="d-inline-block text-dark text-medium margin-right-20px" href="#">Bakhita alrawi </a>
                                        <span className="text-extra-small">Date :  <a href="#" className="text-main-color">July 15, 2016</a></span>
                                        <div className="rating">
                                            <ul>
                                                <li className="active"></li>
                                                <li className="active"></li>
                                                <li className="active"></li>
                                                <li className="active"></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <p className="margin-top-15px text-grey-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                    </div>
                                </li>
                                <li className="border-bottom-1 border-grey-1 margin-bottom-20px">
                                    <img src="/img/testimonial-2.png" className="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt="" />
                                    <div className="margin-left-85px">
                                        <a className="d-inline-block text-dark text-medium margin-right-20px" href="#">Rabie Elkheir </a>
                                        <span className="text-extra-small">Date :  <a href="#" className="text-main-color">July 15, 2016</a></span>
                                        <div className="rating">
                                            <ul>
                                                <li className="active"></li>
                                                <li className="active"></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <p className="margin-top-15px text-grey-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                    </div>
                                </li>
                                <li className="border-bottom-1 border-grey-1 margin-bottom-20px">
                                    <img src="/img/testimonial-3.png" className="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt="" />
                                    <div className="margin-left-85px">
                                        <a className="d-inline-block text-dark text-medium margin-right-20px" href="#">Adel Alsaeed </a>
                                        <span className="text-extra-small">Date :  <a href="#" className="text-main-color">July 15, 2016</a></span>
                                        <div className="rating">
                                            <ul>
                                                <li className="active"></li>
                                                <li className="active"></li>
                                                <li className="active"></li>
                                                <li className="active"></li>
                                                <li className="active"></li>
                                            </ul>
                                        </div>
                                        <p className="margin-top-15px text-grey-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="margin-bottom-80px box-shadow">
                        <div className="padding-30px background-white">
                            <h3><i className="far fa-star margin-right-10px text-main-color"></i> Add Review </h3>
                            <hr />
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputName">Full Name</label>
                                        <input type="text" className="form-control" id="inputName" placeholder="Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Comment :</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comment"></textarea>
                                </div>
                                <a href="#" className="btn-sm btn-lg btn-block background-main-color text-white text-center font-weight-bold text-uppercase border-radius-10 padding-10px">Add Now !</a>
                            </form>
                        </div>
                    </div>



                </div>

                <div className="col-lg-4">
                    <div className="listing-search box-shadow background-main-color padding-30px margin-bottom-30px">
                        <form className="row no-gutters">
                            <div className="col-md-12">
                                <div className="keywords">
                                    <input className="listing-form first border-radius-10 margin-bottom-10px" type="text" placeholder="Keywords..." value="" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="categories dropdown">
                                    <a className="listing-form d-block text-nowrap border-radius-10 margin-bottom-10px" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</a>
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
                            <div className="col-md-12">
                                <a className="listing-bottom border-radius-10 background-second-color box-shadow" href="#">Search Now</a>
                            </div>
                        </form>
                    </div>

                    <div className="row margin-tb-45px">
                        {Category}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecipeDetails;