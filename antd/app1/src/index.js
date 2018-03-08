import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider, DatePicker, message } from 'antd';

import moment from 'moment';

// The default locale is en-US, but we can change it to other language
// import frFR from 'antd/lib/locale-provider/fr_FR';
// import 'moment/locale/fr';
// moment.locale('fr');

import frFR from 'antd/lib/locale-provider/ru_RU';
import 'moment/locale/ru';
moment.locale('ru');

// import frFR from 'antd/lib/locale-provider/en_US';
// //-import 'moment/locale/ru';
// moment.locale('en');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('Selected Date: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
      <LocaleProvider locale={frFR}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={value => this.handleChange(value)} />
          <div style={{ marginTop: 20 }}>Date: {this.state.date.toString()}</div>
        </div>
      </LocaleProvider>
    );
  }
}

ReactDOM.render( <App />, document.getElementById('root') );