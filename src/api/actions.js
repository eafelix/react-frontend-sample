import { actionCreator } from '../helpers'

export const PFX = 'API'

export const doLogin = actionCreator(PFX, 'do_login')
export const getCampaigns = actionCreator(PFX, 'get_campaigns')