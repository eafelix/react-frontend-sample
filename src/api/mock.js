// {
//    id,
//    name,
//    userId,
//    description,
//    brief,
//    products
// }
let CAMPAIGNS = [{
  id: 1,
  name: 'My First Campaign',
  userId: 1,
  description: 'jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua ',
  brief: 'jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua',
  products: [1, 2, 3, 4] //leva a ids para normalizar todo
},
{
  id: 2,
  name: 'My Second Campaign',
  userId: 1,
  description: 'jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua ',
  brief: 'jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua',
  products: [1, 2, 3, 4] //leva a ids para normalizar todo
},
{
  id: 3,
  name: 'My Third Campaign',
  userId: 1,
  description: 'jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua ',
  brief: 'jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua jua',
  products: [1, 2, 3, 4] //leva a ids para normalizar todo
}];

// {
//    id,
//    name,
//    description,
//    price,
//    earnMargin,
//    img
// }
// let PRODUCTS = [];

// {
//    id,
//    name,
//    email,
//    pass,
// }
let USERS = [{
    id: 1,
    name: 'Bruce Wayne',
    email: 'batman@batman.com',
    pass: 'ja ja ja'
}];

export const doLogin = (username, pass) =>
  USERS.find(user => user.username === username && user.pass === pass);
export const getCampaigns = userId =>
  CAMPAIGNS.filter(campaing => campaing.userId === userId);
export const createCampaign = campaign => {
  CAMPAIGNS = CAMPAIGNS.push(campaign);
};
export const updateCampaign = campaign => {
  const newCampaigns = CAMPAIGNS.filter(
    currentCampaign => campaign.id !== currentCampaign.id
  );
  newCampaigns.push(campaign);
  return newCampaigns;
};
export const removeCampaign = campaignId =>
  CAMPAIGNS.filter(currentCampaign => campaignId !== currentCampaign.id);
