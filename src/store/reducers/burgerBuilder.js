import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    ingredientPrice: {
        salad: 30,
        strips: 50,
        cheese: 50,
        meat: 100
    },
    totalPrice: 200,
    error: false
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state, action);
        default:
            return state;
    }
}

function addIngredient(state, action) {
    return updateObject(state, {
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]:
                state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + state.ingredientPrice[action.ingredientName]
    });
}

function removeIngredient(state, action) {
    return updateObject(state, {
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]:
                state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - state.ingredientPrice[action.ingredientName]
    });
}

function setIngredients(state, action) {
    return updateObject(state, {
        totalPrice: 200,
        ingredients: action.ingredients,
        error: false
    });
}

function fetchIngredientsFailed(state, action) {
    return updateObject(state, { error: true });
}

export default reducer
