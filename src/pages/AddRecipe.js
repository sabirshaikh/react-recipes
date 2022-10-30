import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { layoutActions } from "../Store";
const AddRecipe = () => {
	const dispatch = useDispatch();
    const [ingredientList, setIngredientList] = useState([{ingredient: ''}]);
    const [stepList, setStepList] = useState([{step: ''}]);
    const [nutrientList, setNutrientList] = useState([{nutrient: ''}]);
    
    useEffect(() => {
        dispatch(layoutActions.setTitle('Add Recipe'));
        dispatch(layoutActions.setHeaderAlignment('text-left'));
    }, [])

    const ingredientChangeHandler = (e, index) => {
        const list = [...ingredientList];
        list[index] = {ingredient : e.target.value} ;
        setIngredientList(list);
    }

    const addIngredient = () => {
        setIngredientList([...ingredientList, {ingredient: ''}])
    }

    const removeIngredient = (index) => {
        const list = [...ingredientList];
        list.splice(index, 1);
        console.log("list:", list);
        setIngredientList(list);
    }

    const stepChangeHandler = (e, index) => {
        const list = [...stepList];
        list[index] = {step : e.target.value} ;
        setStepList(list);
    }

    const addStep = () => {
        setStepList([...stepList, {step: ''}])
    }

    const removeStep = (index) => {
        const list = [...stepList];
        list.splice(index, 1);
        console.log("list:", list);
        setStepList(list);
    }

    const nutrientChangeHandler = (e, index) => {
        const list = [...nutrientList];
        list[index] = {nutrient : e.target.value} ;
        setNutrientList(list);
    }

    const addNutrient = () => {
        setNutrientList([...nutrientList, {nutrient: ''}])
    }

    const removeNutrient = (index) => {
        const list = [...nutrientList];
        list.splice(index, 1);
        console.log("list:", list);
        setNutrientList(list);
    }    

    const ingredients = ingredientList.map((data, index) => {
        return (
            <div key={'ingredient' + index} className="col-md-8 margin-bottom-20px">
                <label>Ingredient {index + 1} {data.ingredient}</label>
                <div className="row">
                    <div className="col-md-8">
                        <input type="text" value={data.ingredient} onChange={(e) => ingredientChangeHandler(e, index)} className="form-control form-control-sm" />
                    </div>
                    {index > 0 &&
                    <div className="col-md-4">
                        <button type="button"className="btn-sm background-main-color btn-primary ba-1" onClick={() => removeIngredient(index)}>remove</button>
                    </div>}
                </div>
            </div>
        )
    })

    const steps = stepList.map((data, index) => {
        return (
            <div key={'step' + index} className="col-md-8 margin-bottom-20px">
                <label>Step {index + 1} {data.step}</label>
                <div className="row">
                    <div className="col-md-8">
                        <input type="text" value={data.step} onChange={(e) => stepChangeHandler(e, index)} className="form-control form-control-sm" />
                    </div>
                    {index > 0 &&
                    <div className="col-md-4">
                        <button type="button"className="btn-sm background-main-color btn-primary ba-1" onClick={() => removeStep(index)}>remove</button>
                    </div>}
                </div>
            </div>
        )
    })

    const nutrients = nutrientList.map((data, index) => {
        return (
            <div key={'nutrient' + index} className="col-md-8 margin-bottom-20px">
                <label>Nutrient {index + 1} {data.nutrient}</label>
                <div className="row">
                    <div className="col-md-8">
                        <input type="text" value={data.nutrient} onChange={(e) => nutrientChangeHandler(e, index)} className="form-control form-control-sm" />
                    </div>
                    {index > 0 &&
                    <div className="col-md-4">
                        <button type="button"className="btn-sm background-main-color btn-primary ba-1" onClick={() => removeNutrient(index)}>remove</button>
                    </div>}
                </div>
            </div>
        )
    })

    const addRecipeHandler = (e) => {
        e.preventDefault();
        console.log("ingredients:", ingredientList)
        console.log("steps:", stepList)
        console.log("nutrient:", nutrientList)
    }

    return (
        <div className="container">
            <form onSubmit={addRecipeHandler}>
                <div className="margin-tb-45px full-width">
                    <h4 className="padding-lr-30px padding-tb-20px background-white box-shadow border-radius-10"><i className="far fa-list-alt margin-right-10px text-main-color"></i>Basic Informations</h4>
                    <div className="padding-30px padding-bottom-30px background-white border-radius-10">
                        
                            <div className="form-group margin-bottom-20px">
                                <label><i className="far fa-list-alt margin-right-10px"></i> Recipe Title</label>
                                <input type="text" className="form-control form-control-sm" id="ListingTitle" placeholder="Listing Title" />
                            </div>
                            <div className="form-group margin-bottom-20px">
                                <div className="row">
                                    <div className="col-md-4">
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
                                    <div className="col-md-4">
                                        <div className="form-group margin-bottom-20px">
                                            <label>Cuisine Type</label>
                                            <input type="text" className="form-control form-control-sm" id="ListingKeywords" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group margin-bottom-20px">
                                            <label>Meal Type</label>
                                            <input type="text" className="form-control form-control-sm" id="ListingKeywords" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group margin-bottom-20px">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group margin-bottom-20px">
                                            <label>Diet Type</label>
                                            <input type="text" className="form-control form-control-sm" id="ListingKeywords" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group margin-bottom-20px">
                                            <label>Total Weight (g)</label>
                                            <input type="text" className="form-control form-control-sm" id="ListingKeywords" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group margin-bottom-20px">
                                            <label>Total Calories (Kcal)</label>
                                            <input type="text" className="form-control form-control-sm" id="ListingKeywords" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group margin-bottom-20px">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group margin-bottom-20px">
                                            <label>Total Weight (g)</label>
                                            <input type="text" className="form-control form-control-sm" id="ListingKeywords" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group margin-bottom-20px">
                                            <label>Total Calories (Kcal)</label>
                                            <input type="text" className="form-control form-control-sm" id="ListingKeywords" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group margin-bottom-20px">
                                            <label><i className="fas fa-users"></i> Servings</label>
                                            <input type="text" className="form-control form-control-sm" id="ListingKeywords" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group margin-bottom-20px">
                                <div className="row">
                                
                                    <div className="col-md-12 margin-bottom-20px">
                                        <label><i className="far fa-images margin-right-10px"></i> Image URL</label>
                                        <input type="text" className="form-control form-control-sm" placeholder="http://www./" />
                                    </div>
                                </div>
                            </div>

                    
                    </div>
                </div>

                <div className="margin-bottom-45px full-width">
                    <h4 className="padding-lr-30px padding-tb-20px background-white box-shadow border-radius-10"><i className="far fa-list-alt margin-right-10px text-main-color"></i>Ingredients</h4>
                    <div className="padding-30px padding-bottom-30px background-white border-radius-10">
                        <div className="row">
                            {ingredients}
                            <div className="col-12">
                                <button type="button"className="btn btn-md btn-primary ba-1" onClick={addIngredient}>+ Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="margin-bottom-45px full-width">
                    <h4 className="padding-lr-30px padding-tb-20px background-white box-shadow border-radius-10"><i className="far fa-list-alt margin-right-10px text-main-color"></i>Method</h4>
                    <div className="padding-30px padding-bottom-30px background-white border-radius-10">
                        <div className="row">
                            {steps}
                            <div className="col-12">
                                <button type="button"className="btn btn-md btn-primary ba-1" onClick={addStep}>+ Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="margin-bottom-45px full-width">
                    <h4 className="padding-lr-30px padding-tb-20px background-white box-shadow border-radius-10"><i className="far fa-list-alt margin-right-10px text-main-color"></i>Total Nutrients</h4>
                    <div className="padding-30px padding-bottom-30px background-white border-radius-10">
                        <div className="row">
                            {nutrients}
                            <div className="col-12">
                                <button type="button" className="btn btn-md btn-primary ba-1" onClick={addNutrient}>+ Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" href="#" className="btn btn-lg border-2  ba-1 text-white margin-bottom-80px btn-block border-radius-15 padding-15px box-shadow">Add Recipe</button>
            </form>
        </div>
    )
}

export default AddRecipe;