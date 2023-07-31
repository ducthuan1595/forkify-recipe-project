// import icons from '../img/icons.svg';

import { state, loadRecipe } from './model';
import recipeView from './views/recipeView';

// const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const key = 'd7cd6c49-5e47-47db-8146-c47569a9a3a5';

recipeView.renderSpinner();

const showRecipe = async () => {
  try{
    // const id = window.location.hash.slice(1)
    let id = '5ed6604591c37cdc054bcd09'
    if(!id) return;

    await loadRecipe(id);
    const {recipe} = state;

    recipeView.render(state.recipe);

  }catch(err) {
    console.error(err);
  }
};
// showRecipe();

const init = () => {
  recipeView.addHandlerRender(showRecipe);
}
init();