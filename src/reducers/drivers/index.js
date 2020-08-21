import {
  GET_DRIVERS_REQUEST,
  GET_DRIVERS_SUCCESS,
  GET_DRIVERS_FAILURE,
} from '../../actionsConsts';

const initialContactsState = {
  data: [],
  loading: false,
  error: null,
};

export const drivers = (state = initialContactsState, action) => {
  switch (action.type) {
    case GET_DRIVERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_DRIVERS_SUCCESS:
      return {
        ...state,
        data: action.drivers,
        error: null,
        loading: false,
      };
    case GET_DRIVERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.e,
      };
    default:
      return state;
  }
};
