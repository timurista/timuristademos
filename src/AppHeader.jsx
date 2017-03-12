import React from 'react';
import { Link } from 'react-router';
import { AppBar, Drawer, MenuItem } from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const linkStyle = {
  color         : 'black',
  textDecoration: 'none',
};

class AppHeader extends React.Component {
  constructor() {
    super();
    this.state = { navOpen: false };
  }

  handleNavToggle = () => this.setState({ navOpen: !this.state.navOpen });

  handleNavClose = () => this.setState({ navOpen: false });

  menuItemMaker = (route: string, title?: string) => {
    // replaces with either the title or the camel case route to a tittle
    const name = title || route[0].toUpperCase() + route.replace(/([A-Z])/g, ' $1').substring(1);
    return (
      <MenuItem onTouchTap={this.handleNavClose}>
        <Link style={linkStyle} to={`/${route}`}>{name}</Link>
      </MenuItem>
    );
  }

  render() {
    return (
      <div>
        <AppBar
          title="Urista"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleNavToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.navOpen}
          onRequestChange={navOpen => this.setState({ navOpen })}
        >
          {this.menuItemMaker('', 'Home')}
          {this.menuItemMaker('about', 'About')}
          {this.menuItemMaker('time', 'Time Modules')}
          {this.menuItemMaker('vrshopper', 'VR Shopper')}
          {this.menuItemMaker('chromedevtools', 'Chrome Dev Tools Examples')}
        </Drawer>
      </div>
    );
  }

}

export default AppHeader;
