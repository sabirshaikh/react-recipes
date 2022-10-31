import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, useFieldArray } from "react-hook-form";
import { layoutActions } from "../Store";
const AddRecipe = () => {
	const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(layoutActions.setTitle('Add Recipe'));
        dispatch(layoutActions.setHeaderAlignment('text-left'));
    }, [])

    const { register, handleSubmit, formState: { errors, isValid }, control, reset, setValue} = useForm({
		mode: 'all',
		shouldUnregister: false,
  		reValidateMode: 'onChange',
        defaultValues: {
            ingredient: [{value: ''}],
            step: [{value: ''}],
            nutrient: [{value: ''}]
        }
	});
    console.log("fields:", errors);
    const { fields: ingredientList, append: appendIngredients, remove: removeIngredients } = useFieldArray({
        control,
        name: "ingredient"
    });
    
    const { fields: stepList, append: appendSteps, remove: removeSteps } = useFieldArray({
        control,
        name: "step"
    });

    const { fields: nutrientList, append: appendNutrients, remove: removeNutrients } = useFieldArray({
        control,
        name: "nutrient"
    });

    const ingredientChangeHandler = (e, index) => {
        setValue(`ingredient[${index}].value`, e.currentTarget.value);
    }

    const addIngredient = () => {
        appendIngredients({value: ''})
    }

    const removeIngredient = (index) => {
        removeIngredients(index)
    }

    const stepChangeHandler = (e, index) => {
        setValue(`step[${index}].value`, e.currentTarget.value);
    }

    const addStep = () => {
        appendSteps({value: ''})
    }

    const removeStep = (index) => {
        removeSteps(index)
    }

    const nutrientChangeHandler = (e, index) => {
        setValue(`nutrient[${index}].value`, e.currentTarget.value);
    }

    const addNutrient = () => {
        appendNutrients({value: ''})
    }

    const removeNutrient = (index) => {
        removeNutrients(index)
    }    
   
    const ingredients = ingredientList.map((data, index) => {
        return (
            <div key={'ingredient' + index} className="col-md-8 margin-bottom-20px">
                <label>Ingredient {index + 1} {data.ingredient}</label>
                <div className="row">
                    <div className="col-md-8">
                        <input type="text" 
                            defaultValue={data.value} 
                            onChange={(e) => ingredientChangeHandler(e, index)} 
                            className="form-control form-control-sm" 
                            key={data.id}
                            control={control}
                            {...register(`ingredient[${index}].value`, 
                            { required: true,  minLength: 2})}
                            
                        />
                        {errors.ingredient && errors.ingredient[index] && errors.ingredient[index].value.type === "required" && <p className="text-main-color">Please enter Ingredient</p>}
                        {errors.ingredient && errors.ingredient[index] && errors.ingredient[index].value.type === "minLength" && <p className="text-main-color">Please enter minimum 2 characters</p> }
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
                    <input type="text" 
                            defaultValue={data.value} 
                            onChange={(e) => stepChangeHandler(e, index)} 
                            className="form-control form-control-sm" 
                            key={data.id}
                            control={control}
                            {...register(`step[${index}].value`, 
                            { required: true,  minLength: 2})}
                            
                        />
                        {errors.step && errors.step[index] && errors.step[index].value.type === "required" && <p className="text-main-color">Please enter Step</p>}
                        {errors.step && errors.step[index] && errors.step[index].value.type === "minLength" && <p className="text-main-color">Please enter minimum 2 characters</p> }
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
                    <input type="text" 
                            defaultValue={data.value} 
                            onChange={(e) => stepChangeHandler(e, index)} 
                            className="form-control form-control-sm" 
                            key={data.id}
                            control={control}
                            {...register(`nutrient[${index}].value`, 
                            { required: true,  minLength: 2})}
                            
                        />
                        {errors.nutrient && errors.nutrient[index] && errors.nutrient[index].value.type === "required" && <p className="text-main-color">Please enter nutrient</p>}
                        {errors.nutrient && errors.nutrient[index] && errors.nutrient[index].value.type === "minLength" && <p className="text-main-color">Please enter minimum 2 characters</p> }
                    </div>
                    {index > 0 &&
                    <div className="col-md-4">
                        <button type="button"className="btn-sm background-main-color btn-primary ba-1" onClick={() => removeNutrient(index)}>remove</button>
                    </div>}
                </div>
            </div>
        )
    })

    const addRecipeHandler = (data) => {
        console.log("form data:", data)
        reset()
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(addRecipeHandler)}>
                <div className="margin-tb-45px full-width">
                    <h4 className="padding-lr-30px padding-tb-20px background-white box-shadow border-radius-10"><i className="far fa-list-alt margin-right-10px text-main-color"></i>Basic Informations</h4>
                    <div className="padding-30px padding-bottom-30px background-white border-radius-10">
                        
                            <div className="form-group margin-bottom-20px">
                                <div className="row">
                                    <div className="col-md-6">
                                    <label><i className="far fa-list-alt margin-right-10px"></i> Recipe Title</label>
                                        <input type="text" className="form-control form-control-sm" placeholder="Recipe Title" 
                                            {...register("recipeTitle", 
                                            { required: true,  minLength: 3})}
                                        />
                                        {errors.recipeTitle && errors.recipeTitle.type === "required" && <p className="text-main-color">Please enter Recipe Title</p>}
                                        {errors.recipeTitle && errors.recipeTitle.type === "minLength" && <p className="text-main-color">Please enter minimum 3 characters</p> }
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group margin-bottom-20px">
                                        <label><i className="far fa-images margin-right-10px"></i> Image URL</label>
                                            <input type="text" className="form-control form-control-sm" placeholder="http://www./" />
                                        </div>
                                    </div>      
                                </div>
                            </div>
                            <div className="form-group margin-bottom-20px">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label><i className="far fa-folder-open margin-right-10px"></i> Category</label>
                                        <select className="form-control form-control-sm" {...register("recipeCategory")}>
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
                                            <input type="text" className="form-control form-control-sm"
                                                {...register("recipeCuisine", 
							                    { required: true,  minLength: 3})}
                                            />
                                            {errors.recipeCuisine && errors.recipeCuisine.type === "required" && <p className="text-main-color">Please enter Cuisine Type</p>}
							                {errors.recipeCuisine && errors.recipeCuisine.type === "minLength" && <p className="text-main-color">Please enter minimum 3 characters</p> }
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group margin-bottom-20px">
                                            <label>Meal Type</label>
                                            <input type="text" className="form-control form-control-sm"
                                                {...register("recipeMeal", 
							                    { required: true,  minLength: 3})}
                                            />
                                            {errors.recipeMeal && errors.recipeMeal.type === "required" && <p className="text-main-color">Please enter Meal Type</p>}
							                {errors.recipeMeal && errors.recipeMeal.type === "minLength" && <p className="text-main-color">Please enter minimum 3 characters</p> }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group margin-bottom-20px">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group margin-bottom-20px">
                                            <label>Diet Type</label>
                                            <input type="text" className="form-control form-control-sm"
                                                {...register("recipeDiet", 
							                    { required: true,  minLength: 3})}
                                            />
                                            {errors.recipeDiet && errors.recipeDiet.type === "required" && <p className="text-main-color">Please enter Diet Type</p>}
							                {errors.recipeDiet && errors.recipeDiet.type === "minLength" && <p className="text-main-color">Please enter minimum 3 characters</p> }
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group margin-bottom-20px">
                                            <label>Total Weight (g)</label>
                                            <input type="text" className="form-control form-control-sm"
                                                {...register("recipeWeight", 
							                    { required: true, pattern: /^\d*$/})}
                                            />
                                            {errors.recipeWeight && errors.recipeWeight.type === "required" && <p className="text-main-color">Please enter Weight</p>}
                                            {errors.recipeWeight && errors.recipeWeight.type === "pattern" && <p className="text-main-color">Please enter valid Weight</p> }
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group margin-bottom-20px">
                                            <label>Total Calories (Kcal)</label>
                                            <input type="text" className="form-control form-control-sm"
                                                {...register("recipeCalories", 
							                    { required: true, pattern: /^\d*$/})}
                                            />
                                            {errors.recipeCalories && errors.recipeCalories.type === "required" && <p className="text-main-color">Please enter Calories</p>}
                                            {errors.recipeCalories && errors.recipeCalories.type === "pattern" && <p className="text-main-color">Please enter valid Calories</p> }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group margin-bottom-20px">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group margin-bottom-20px">
                                            <label><i className="fas fa-users"></i> Servings</label>
                                            <input type="text" className="form-control form-control-sm"
                                                {...register("recipeServings", 
							                    { required: true, pattern: /^\d*$/})}
                                            />
                                            {errors.recipeServings && errors.recipeServings.type === "required" && <p className="text-main-color">Please enter Servings</p>}
                                            {errors.recipeServings && errors.recipeServings.type === "pattern" && <p className="text-main-color">Please enter only digits</p> }
                                        </div>
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
                <button type="submit" href="#" className="btn btn-lg border-2  ba-1 text-white margin-bottom-80px btn-block border-radius-15 padding-15px box-shadow" disabled={!isValid}>Add Recipe</button>
            </form>
        </div>
    )
}

export default AddRecipe;