import * as api from "./mock";
import * as actions from "./actions";

export const doLogin = (user, pass) => (dispatch, getState) => {
  const res = api.doLogin(user, pass);
  dispatch(actions.doLogin.succeed(res));
};

export const getCampaigns = id => (dispatch, getState) => {
  const res = api.getCampaigns(id);
  console.log(res)
  dispatch(actions.getCampaigns.succeed(res));
};
