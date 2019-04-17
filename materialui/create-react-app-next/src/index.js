import React from 'react';
import ReactDOM from 'react-dom';
//import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider } from '@material-ui/styles';
// import App from './App';
// import theme from './theme';

// const Layout = () => (
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <App />
//   </ThemeProvider>
// )

//import Layout from './page-layout-examples/album/Album';
//import Layout from './page-layout-examples/blog/Blog';
//import Layout from './page-layout-examples/checkout/Checkout';
import Layout from './page-layout-examples/dashboard/Dashboard';
//import Layout from './page-layout-examples/pricing/Pricing';
//import Layout from './page-layout-examples/sign-in/SignIn';
//import Layout from './page-layout-examples/sign-in-side/SignInSide';
//import Layout from './page-layout-examples/sign-up/SignUp';
//import Layout from './page-layout-examples/sticky-footer/StickyFooter';

ReactDOM.render(
  <Layout />,
  document.querySelector('#root'),
);
