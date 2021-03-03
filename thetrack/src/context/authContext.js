import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
    return ({email, password}) => {
        // make api request  so sign up emai land pass

        // if we sign up modify our state, and are authenticated

        // if signup fails, reflect error msg
    }
}

const signin = (dispatch) => {
    return ({}) => {
        // try to sign in
        // succes handle state
        // if failure show err msg
    }
}

const signout = () => {
    //close session
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {signin, signout, signup},
  { isSignedIn: false }
);
