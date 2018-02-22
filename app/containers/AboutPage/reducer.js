/*
 *
 * AboutPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_CONTENT,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  aboutMeText: '',
  locale: '',
});

function aboutPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONTENT:
      return state
        .set('loading', true)
        .set('error', false)
        .set('locale', '');
    case LOAD_CONTENT_SUCCESS:
      return state
        .set('aboutMeText', action.content)
        .set('loading', false)
        .set('locale', action.locale);
    case LOAD_CONTENT_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default aboutPageReducer;
