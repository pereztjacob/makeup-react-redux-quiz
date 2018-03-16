export const REDUCER = 'REDUCER';

export const initialState = {
  prop: null,
  propTwo: null,
  propThree: null 
};

export default function reduce(state = initialState, { type, payload }) {
  switch(type) {
    case REDUCER: {

      return {
        ...state,
        prop: payload
      };
    }
    default:
      return state;
  }
}