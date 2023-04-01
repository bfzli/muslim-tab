import { Auth } from "../../configs/Firebase";

const Authenticate = (state, action) => {
  const data = action.payload;

  state.User = data;
  state.Auth = true;
  state.Loading = false;
};

const Deauthenticate = (state, action) => {
  Auth.signOut();

  state.User = {};
  state.Auth = false;
  state.Loading = false;
};

export { Authenticate, Deauthenticate };
