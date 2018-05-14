import React from 'react'
import ReactDOM from 'react-dom'
import {Post} from "./components/post"
import {Loader} from "./components/loader"

const App = () => (
  <Loader>
    <Post />
    {/*
    <Loader>
      <div>
        <div>
          <div>
            <div>
              <Post />
            </div>
          </div>
        </div>
      </div>
    </Loader>
    */}
  </Loader>
);

ReactDOM.render(<App />, document.getElementById("root"))


// const dataFetcher = () => {
//   throw new Promise((resolve, reject) => {
//     // fake latency
//     setTimeout(() => resolve({foo: 'bar'}), 2000)
//   })
// }

// class IsLoading extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isLoading: false };
//   }

//   componentDidCatch(error, info) {
//     if(error instanceof Promise) {
//       this.setState({ isLoading: true });
//       // Display fallback UI
//       error.then((data) => this.setState({ isLoading: false, data }));
//     }
//   }

//   render() {
//     return this.props.children(this.state)
//   }
// }

// const Loader = props => (
//   <IsLoading>
//     {({isLoading, data}) => (
//       isLoading 
//       ? "Loading..." 
//       : React.cloneElement(props.children, {data})
//     )}
//   </IsLoading>
// );

// class AsyncComponent extends React.Component {
//   componentDidMount() {
//     if(!this.props.data)
//       dataFetcher();
//   }
  
//   render () {
//     console.log(this.props.data);
//     return <div>Yay I got my data :) </div>
//   }
// }

// const App = () => (
//   <div>
//     <Loader>
//       <AsyncComponent />
//     </Loader>
//   </div>
// )

// ReactDOM.render(<App />, document.getElementById("root"))