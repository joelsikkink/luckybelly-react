import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Image, Icon, Menu, Dropdown, Grid, Input, Label, List } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless inverted six item className="top" id={"topMenu"}>
          <Container>
            <Container id={"menuIMG"}>
              <Image src="http://luckybelly.com/img/lucky-logo-light.png"/>
            </Container>
            <Menu.Item>  </Menu.Item>
            <Menu.Item>Menus</Menu.Item>
            <Menu.Item>Info</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
            <Menu.Item id={"bigWord"}>Breaking Bread Hospitality</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image fluid src="http://luckybelly.com/img/bellybowl.jpg"/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns={3}>
            <Grid.Column>
                <Image fluid src="http://luckybelly.com/img/lucky-logo-light.png"/>
            </Grid.Column>
            <Grid.Column>
              Links
              <hr/>
              <List>
                <List.Item>Hours</List.Item>
                <List.Item>Menus</List.Item>
                <List.Item>Reservations</List.Item>
                <List.Item>Corkage</List.Item>
                <List.Item>Contact</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Contact
              <hr/>
              <List>
                <List.Item>808-531-1888</List.Item>
                <List.Item>eat@luckybelly.com</List.Item>
                <List.Item>50 N. Hotel St. Honululu, HI 96817</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class LB extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<LB/>, document.getElementById('root'));