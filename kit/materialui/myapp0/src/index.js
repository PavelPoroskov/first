import React from 'react';
import ReactDOM from 'react-dom';

import Reboot from 'material-ui/Reboot';
//import purple from 'material-ui/colors/purple';
//import indigo from 'material-ui/colors/indigo';
//import green from 'material-ui/colors/green';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

//import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';


// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: purple[300],
//       main: purple[500],
//       dark: purple[700],
//     },
//     secondary: {
//       light: green[300],
//       main: green[500],
//       dark: green[700],
//     },
//   },
// });

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#2196f3'
    },
//    secondary: indigo
  }
});

//(
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
	<React.Fragment>
    <MuiThemeProvider theme={theme}>
      <Reboot />
      <App />
    </MuiThemeProvider>
	</React.Fragment>
	, document.getElementById('root'));
//)
//registerServiceWorker();