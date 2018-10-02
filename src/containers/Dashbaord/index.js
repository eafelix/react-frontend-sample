import React, { Component } from 'react'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as api from "../../api";
import * as selectors from "./selectors";

import DashboardView from "../../components/DashboardView";

class DashboardComponent extends Component {
  componentDidMount(){
    const { getCampaigns } = this.props
    getCampaigns()
  }
  render() {
    const { list } = this.props
    return <DashboardView list={list}/>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: selectors.getCamapaigns(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCampaigns: () => api.getCampaigns(1)// harcoded, this must come from redux
    },
    dispatch
  );

const DashbaordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);

export default DashbaordContainer;
