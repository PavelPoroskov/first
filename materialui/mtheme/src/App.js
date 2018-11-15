import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import React, { PureComponent } from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';

export default class Header extends PureComponent<PropType> {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <div>
            <Button>
              <div>Button 1</div>
            </Button>
            <Button>
              <div>Button 2</div>
            </Button>
          </div>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}