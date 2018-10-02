import { createReducer } from "../helpers";

import * as actions from "./actions";

const initialState = {
  user: null,
  campaigns: []
};

const apiReducer = createReducer(initialState, {
  [actions.doLogin.succeed.type]: (state, action) => ({
    ...state,
    user: action.payload
  }),
  [actions.getCampaigns.succeed.type]: (state, action) => ({
    ...state,
    campaigns: [
      ...action.payload
    ]
  })
});

export default apiReducer;
