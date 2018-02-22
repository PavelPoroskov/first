// ViewerTodoList.js
import React from 'react';
import PropTypes from 'prop-types';
import {graphql, QueryRenderer} from 'react-relay';
import TodoList from './TodoList'

//const environment = /* defined or imported above... */;
import environment from './relayenv';

export default class ViewerTodoList extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ViewerTodoListQuery {
            viewer {
              id
              # Re-use the fragment here
              ...TodoList_userTodoData  
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <div>
              <div>Todo list for User {props.user.id}:</div>
              <TodoList userTodoData={props.user.userTodoData} />
            </div>
          );
        }}
      />
    );
  }
}