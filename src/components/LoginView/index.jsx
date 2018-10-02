import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

const ContainerPaper = styled(Paper)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: baseline;
  height: 100%;
  width: 100%;
`;

const LoginCard = styled(Card)`
  max-width: 400px;
  margin-top: 15%;
`;

// const LoginCardMedia = styled(CardMedia)`
//   height: 40%;
// `;

const LoginView = ({ doLogin }) => {
  return (
    <React.Fragment>
      <ContainerPaper>
        <LoginCard>
          {/* <LoginCardMedia component="img" alt="Sign in" title="Matrix" /> */}
          <CardContent>
            <Typography variant="headline" component="h1">
              Sign in
            </Typography>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="raised" color="primary">
              Sign in
            </Button>
          </CardContent>
        </LoginCard>
      </ContainerPaper>
    </React.Fragment>
  );
};

LoginView.propTypes = {
  doLogin: PropTypes.func.isRequired
};

export default LoginView;
