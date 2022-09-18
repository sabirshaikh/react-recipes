import { Fragment } from "react";

const HomePage = () => {
  const bannerImage = {backgroundImage: 'url(/img/banner_1.jpg)'}

  return (
    <Fragment>
      <div className="pull-top-85px">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
              <a href="#" className="d-block box-shadow background-main-color text-white hvr-float">
                <div className="thum"><img src="/img/cat-1.jpg" alt="" /></div>
                <h4 className="text-center padding-15px">Fish</h4>
              </a>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
              <a href="#" className="d-block box-shadow background-main-color text-white hvr-float">
                <div className="thum"><img src="/img/cat-2.jpg" alt="" /></div>
                <h4 className="text-center padding-15px">Cocktails</h4>
              </a>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
              <a href="#" className="d-block box-shadow background-main-color text-white hvr-float">
                <div className="thum"><img src="/img/cat-3.jpg" alt="" /></div>
                <h4 className="text-center padding-15px">Eggs</h4>
              </a>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
              <a href="#" className="d-block box-shadow background-main-color text-white hvr-float">
                <div className="thum"><img src="/img/cat-4.jpg" alt="" /></div>
                <h4 className="text-center padding-15px">Salads</h4>
              </a>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
              <a href="#" className="d-block box-shadow background-main-color text-white hvr-float">
                <div className="thum"><img src="/img/cat-5.jpg" alt="" /></div>
                <h4 className="text-center padding-15px">Asian</h4>
              </a>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
              <a href="#" className="d-block box-shadow background-main-color text-white hvr-float">
                <div className="thum"><img src="/img/cat-6.jpg" alt="" /></div>
                <h4 className="text-center padding-15px">Pizza</h4>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="padding-tb-100px">
        <div className="container">
          <div className="title text-center">
            <h2 className="font-weight-700 text-main-color">Latest Recipes</h2>
            <div className="row justify-content-center margin-bottom-45px">
              <div className="col-md-7">
                <p className="text-grey-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>
            </div>
          </div>

          <div className="recipes-masonry">
        
            <div className="col-xl-3 col-lg-4 col-md-6 recipe-item margin-bottom-40px">
              <div className="card border-0 box-shadow">
                <div className="card-img-top"><a href="#"><img src="/img/recipes-3.jpg" alt=""/></a></div>
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
                  <div className="row no-gutters">
                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                  </div>
                </div>
                <div className="background-light-grey border-top-1 border-grey padding-lr-30px padding-tb-20px">
                  <a href="#" className="d-inline-block text-grey-3 h6 margin-bottom-0px margin-right-15px"><img src="/img/zoal-1.jpg" className="height-30px border-radius-30 margin-right-15px" alt=""/> Salim Aldosery</a>
                </div>
              </div>
            </div>
           


           
            <div className="col-xl-3 col-lg-4 col-md-6 recipe-item margin-bottom-40px">
              <div className="card border-0 box-shadow">
                <div className="card-img-top"><a href="#"><img src="/img/recipes-4.jpg" alt=""/></a></div>
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
                  <div className="row no-gutters">
                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                  </div>
                </div>
                <div className="background-light-grey border-top-1 border-grey padding-lr-30px padding-tb-20px">
                  <a href="#" className="d-inline-block text-grey-3 h6 margin-bottom-0px margin-right-15px"><img src="/img/zoal-1.jpg" className="height-30px border-radius-30 margin-right-15px" alt=""/> Salim Aldosery</a>
                </div>
              </div>
            </div>
           


           
            <div className="col-xl-3 col-lg-4 col-md-6 recipe-item margin-bottom-40px">
              <div className="card border-0 box-shadow">
                <div className="card-img-top"><a href="#"><img src="/img/recipes-5.jpg" alt=""/></a></div>
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
                  <div className="row no-gutters">
                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                  </div>
                </div>
                <div className="background-light-grey border-top-1 border-grey padding-lr-30px padding-tb-20px">
                  <a href="#" className="d-inline-block text-grey-3 h6 margin-bottom-0px margin-right-15px"><img src="/img/zoal-7.jpg" className="height-30px border-radius-30 margin-right-15px" alt=""/> Salim Aldosery</a>
                </div>
              </div>
            </div>
           


           
            <div className="col-xl-3 col-lg-4 col-md-6 recipe-item margin-bottom-40px">
              <div className="card border-0 box-shadow">
                <div className="card-img-top"><a href="#"><img src="/img/recipes-6.jpg" alt=""/></a></div>
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
                  <div className="row no-gutters">
                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                  </div>
                </div>
                <div className="background-light-grey border-top-1 border-grey padding-lr-30px padding-tb-20px">
                  <a href="#" className="d-inline-block text-grey-3 h6 margin-bottom-0px margin-right-15px"><img src="/img/zoal-8.jpg" className="height-30px border-radius-30 margin-right-15px" alt=""/> Salim Aldosery</a>
                </div>
              </div>
            </div>
           


          </div>
          <div className="text-center">
            <a href="#" className="btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-third-color text-white">Show All Recipes</a>
          </div>
        </div>
       
	    </section>
    </Fragment>
  )
};

export default HomePage;
