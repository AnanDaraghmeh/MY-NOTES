import { combineReducers } from 'redux';
import authReducer from './authReducer';
import notesReducer from './notesReducer';
import { reducer as formReducer } from 'redux-form';
import modalReducer from './modalReducer';

export default combineReducers({
  auth: authReducer,
  notes: notesReducer,
  form: formReducer,
  modal: modalReducer
});
