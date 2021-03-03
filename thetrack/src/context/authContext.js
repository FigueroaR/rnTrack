import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
    return async ({email, password}) => {
        // make api request  so sign up emai land pass
        // if we sign up modify our state, and are authenticated
        // if signup fails, reflect error msg
        try {
            
            const response = await trackerApi.post('/signup', {email, password})
            console.log(response.data)
        } catch(err) {
            console.log('Dude error', err.response.data);
            
        }
    }
}

const signin = (dispatch) => {
    return ({email , password}) => {
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
