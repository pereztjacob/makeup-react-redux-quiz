import { REDUCER } from './reducers';

export function action(newProp) {
  return dispatch => {

    dispatch({
      type: REDUCER,
      payload: newProp
    });
  };
}