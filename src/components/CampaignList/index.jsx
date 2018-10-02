import React from "react";

import styled from 'styled-components'

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Card = styled(Paper)`
  width: 70%;
  margin: 50px auto;
`;

const CampaignListItem = ({ campaign }) => (
  <ListItem button>
    <ListItemText primary={campaign.name} />
  </ListItem>
);

const CampaignList = ({ list }) => {
  return (
    <Card>
      <List>
        {list
          ? list.map(campaign => <CampaignListItem campaign={campaign} />)
          : null}
      </List>
    </Card>
  );
};

export default CampaignList;
