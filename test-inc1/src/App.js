import React from 'react';

class RandomList extends React.Component {

  getRandomList = (count) => {
    let list = [];
    for (let i=0; i<count; i += 1) {
      const newNum = Math.floor(Math.random()*100)
      list.push(newNum);
    }
    return list;
  }
  render() {
    const {count} = this.props;
    const list = this.getRandomList(count);
    return (
      <ul>
        {list.map((n,ind) => <li key={ind}>{n}</li>)}
      </ul>
    )
  }
}

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  inc = () => {
    this.setState(prevState => ({counter: prevState.counter + 1}))
  }
  render() {
    const {counter} = this.state;
    return (
      <div>
        <button type="button" onClick={this.inc}>Increment</button>
        <div>Counter: {counter}</div>
        <RandomList count={counter} />
      </div>
    )
  }
  autoInc = (ms) => {
    this.timeoutId = setTimeout(() => {
      this.inc();
      this.autoInc(ms);
    }, ms)
  }
  componentDidMount() {
    this.autoInc(3000);
  }
  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}

export default ParentComponent;
