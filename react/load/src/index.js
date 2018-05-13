import React from 'react'
import ReactDOM from 'react-dom'
import {Post} from "./components/post"
import {Loader} from "./components/loader"

const App = () => (
  <Loader>
    <Post />
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
  </Loader>
);

ReactDOM.render(<App />, document.getElementById("root"))