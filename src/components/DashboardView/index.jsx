import React from 'react'

import styled from 'styled-components'

import CampaignList from '../CampaignList'
import DashboardNavBar from '../DasboardNavBar';

const ViewContainer = styled.div`
   height: 100%;
   width: 100%;
`

const DasboardView = ({ list }) => {
    return (
      <ViewContainer>
        <DashboardNavBar title={"Home"}/>
        <CampaignList list={list}/>
      </ViewContainer>
    )
}
export default DasboardView 