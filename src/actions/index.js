import {
  GET_DRIVERS_REQUEST,
  GET_DRIVERS_SUCCESS,
  GET_DRIVERS_FAILURE,
} from '../actionsConsts';
import axios from 'axios';

export function getDrivers() {
  const request = () => {
    return {type: GET_DRIVERS_REQUEST};
  };
  const success = (drivers) => {
    return {type: GET_DRIVERS_SUCCESS, drivers};
  };
  const failure = () => {
    return {type: GET_DRIVERS_FAILURE};
  };

  return async (dispatch) => {
    dispatch(request());
    try {
      const response = await axios.get('http://ergast.com/api/f1/drivers.json');
      const drivers = response.data.MRData.DriverTable.Drivers;
      dispatch(success(drivers));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
