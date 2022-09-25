import { Link } from "react-router-dom";
const RecipeCard1 = (props) => {
    const rating = parseInt(props.rating);

    const RatingBlock = () => {
        let star = [];
        for(let i=0; i < rating; i++) {
            star.push( <li key={'s' + i} className="active"></li>)
        }
        return star;
    }

    return (
        <div className="background-white thum-hover box-shadow hvr-float full-width">
            <div className="float-md-left margin-right-30px thum-xs">
            <Link to={`/recipeDetails/${props.recipeName}`}><img className="width-250px" src="/img/recipes-1.jpg" alt="" /></Link>
            </div>
            <div className="padding-25px">
                <div className="rating">
                    <ul>
                        <RatingBlock/>
                    </ul>
                </div>
                <h3> <Link to={`/recipeDetails/${props.recipeName}`} href="#" className="d-block text-dark text-capitalize text-medium margin-tb-15px">{props.recipeName} </Link></h3>
                <hr />
                <div className="row no-gutters">
                    <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                    <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default RecipeCard1;