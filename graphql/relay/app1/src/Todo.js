// @flow
import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay';
//import Relay, {graphql} from 'react-relay';

import ChangeTodoStatusMutation from './mutations/ChangeTodoStatusMutation';

// type Props = {
//   todo: {
//     complete: boolean,
//     text: string,
//   },
// };
type Props = {
  todo: Todo_todo
};


class Todo extends React.Component<Props> {

  _handleOnCheckboxChange = (e) => {
    const complete = e.target.checked;
    ChangeTodoStatusMutation.commit(
      this.props.relay.environment,
      complete,
      this.props.todo,
    );
  };

  render() {
    const {complete, text} = this.props.todo;

    return (
      <li>
        <div>
          <input
            checked={complete}
            type="checkbox"
            onChange={this._handleCompleteChange}
          />
          <label>
            {text}
          </label>
        </div>
      </li>
    );
  }
}

export default createFragmentContainer( Todo, {
  todo: graphql`
    fragment Todo_todo on Todo {
      complete
      text
    }
  `
});