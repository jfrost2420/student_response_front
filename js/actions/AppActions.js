/*
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 * 3) (optional) Add an async function like this:
 *    export function asyncYourAction(var) {
 *        return (dispatch) => {
 *             // Do async stuff here
 *             return dispatch(yourAction(var));
 *        };
 *    }
 *
 *    If you add an async function, remove the export from the function
 *    created in the second step
 */

// Disable the no-use-before-define eslint rule for this file
// It makes more sense to have the asnyc actions before the non-async ones
/* eslint-disable no-use-before-define */
import { CHANGE_OWNER_NAME, CHANGE_PROJECT_NAME, TOGGLE_USER } from '../constants/AppConstants';
import { fetchit, Test, login } from '../api/index';

export function asyncChangeProjectName(name) {
  return (dispatch) => {
    return Test().then(
      (results) => console.log(results),
      (error) => console.log(error)
    );
  };

  //another example
  /*
  return (dispatch) => {
    dispatch({ type: SOMETHING_STARTED });

    return requestSomething().then(
      (result) =>  dispatch({ type: SOMETHING_COMPLETED, result }),
      (error) =>  dispatch({ type: SOMETHING_FAILED, error })
    );
  };
  */
}

export function loginUser(username, password) {
  return (dispatch) => {
    return login(username, password).then(
      (results) => {
        console.log(results);
      },
      (error) => {
        console.log(error);
      }
    );
  };
}

export function asyncChangeOwnerName(name) {
  return (dispatch) => {
    // You can do async stuff here!
    // API fetching, Animations,...
    // For more information as to how and why you would do this, check https://github.com/gaearon/redux-thunk
    return dispatch(changeOwnerName(name));
  };
}

export function changeProjectName(name) {
  return { type: CHANGE_PROJECT_NAME, name };
}

export function changeOwnerName(name) {
  return { type: CHANGE_OWNER_NAME, name };
}

export function toggleUser(value) {
  return { type: TOGGLE_USER, value};
}
