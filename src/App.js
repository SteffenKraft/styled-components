import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

import { truncate, media } from './styles-utils';

const AppDIV = styled.div`
  text-align: center;
`;

const AppLogoIMG = styled.img`
  height: 80px;
`;

const AppHeaderDIV = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const TitleH2= styled.h2`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

// !! change styles via props !!
const GotToBUTTON = styled.button`
  padding: ${props => props.small ? '0.25em 1em' : '0.5em 2em'};
  background-color: #333;
  color: #fff;
  border-radius: 3px;
  border-color: none;
  margin: 10px 20px;
`;

// !! Musing helper funtionn to reuse styles plus individual parameter of width !!
const Box = styled.div`
  ${ truncate('200px') }
  margin: 30px auto 0;
  background: papayawhip;
`;

// !! Using Media queries  !!
const Container = styled.div`
  color: red;
  ${media.tablet`color: green`}
  ${media.desktop`color: blue`}
`;

const StyledInput = styled.input`
  padding: 10px 40px;
  margin-top: 30px;
`;

const AppIntroP = styled.div`
  font-size: large;
`;


class App extends Component {

  componentDidMount() {
    this.input.focus()
  }

  render() {
    return (
      <AppDIV>
        <AppHeaderDIV>
          <AppLogoIMG src={logo} alt="logo" />
          <TitleH2>Welcome to React</TitleH2>
        </AppHeaderDIV>
        <AppIntroP>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntroP>
        <GotToBUTTON>
          Checkout normal
        </GotToBUTTON>
        <GotToBUTTON small>
          Checkout small
        </GotToBUTTON>
        <Box>
          Truncate this text inside a box of 200 pixels
        </Box>
        <Container>
          Media Queries with styled components
        </Container>
        {/* !! Refs to styled components DOM nodes !! */}
        <StyledInput innerRef={(comp) => { this.input = comp }} />
      </AppDIV>
    );
  }
}

export default App;
