import get_repos from "./get_repos"

import { routerReducer } from 'react-router-redux'
import { reducer as uiReducer } from 'redux-ui'
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  get_repos,
  routing: routerReducer,
  ui: uiReducer,
  form: formReducer,
});
