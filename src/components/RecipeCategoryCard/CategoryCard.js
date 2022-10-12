import { Link } from "react-router-dom"
const CategoryCard = (props) => {
    return (
        <Link to={`/recipes/${props.categoryName}`} className="d-block box-shadow background-main-color text-white hvr-float">
            <div className="thum"><img src={props.image} alt="" /></div>
            <h4 className="text-center padding-15px">{props.categoryName}</h4>
        </Link>
    )
}

export default CategoryCard