import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const RecipeCard2 = (props) => {
    const rating = parseInt(props.rating);
    const id = encodeURIComponent(props.recipeUrl);
    const RatingBlock = () => {
        let star = [];
        for(let i=0; i < rating; i++) {
            star.push( <li key={'rating' + i} className="active"></li>)
        }
        return star;
    }

    return (

        <div className="card border-0 box-shadow">
            <div className="card-img-top">
                <Link to={`/recipeDetails/${id}`}>
                    <LazyLoadImage
                        src={props.recipeImage}
                        effect="blur"
                        width='100%'
                        className="width-250px"
                    />
                </Link>
            </div>
            <div className="padding-lr-30px padding-tb-20px">
                <h5 className="margin-bottom-20px margin-top-10px"><Link to={`/recipeDetails/${id}`} className="d-block text-dark text-capitalize text-medium margin-tb-15px">{props.recipeName} </Link></h5>
                <div className="rating">
                <ul>
                    <RatingBlock/>
                </ul>
                </div>
                <hr />
                <div className="row no-gutters">
                <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> {props.recipeServing}</a></div>
                </div>
            </div>
            <div className="background-light-grey border-top-1 border-grey padding-lr-30px padding-tb-20px">
                <a href="#" className="d-inline-block text-grey-3 h6 margin-bottom-0px margin-right-15px"><img src="/img/zoal-1.jpg" className="height-30px border-radius-30 margin-right-15px" alt=""/> Salim Aldosery</a>
            </div>
        </div>
    )
}

export default RecipeCard2;