/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import MarkAllTodosMutation from '../mutations/MarkAllTodosMutation';
import Todo from './Todo';

import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';

class TodoList extends React.Component {
  _handleMarkAllChange = e => {
    const complete = e.target.checked;
    MarkAllTodosMutation.commit(
      this.props.relay.environment,
      complete,
      this.props.viewer.todos,
      this.props.viewer,
    );
  };
  renderTodos() {
    // return this.props.viewer.todos.edges.map(edge => (
    //   <Todo key={edge.node.id} todo={edge.node} viewer={this.props.viewer} />
    // ));
    return this.props.viewer.todos.edges.slice(this.prevEnd || 0).map(edge => (
      <Todo key={edge.node.id} todo={edge.node} viewer={this.props.viewer} />
    ));
  }
  render() {
    const numTodos = this.props.viewer.totalCount;
    const numCompletedTodos = this.props.viewer.completedCount;
    return (
      <section className="main">
        <input
          checked={numTodos === numCompletedTodos}
          className="toggle-all"
          onChange={this._handleMarkAllChange}
          type="checkbox"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">{this.renderTodos()}</ul>

        <button onClick={this._loadMore}
          title="Load More"
        >Load More</button>
      </section>
    );
  }

  _loadMore = () => {
    //console.log('_loadMore 1')
    this.prevEnd = this.props.viewer.todos.edges.length

    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    //console.log('_loadMore 2')

    this.props.relay.loadMore(
      10,  // Fetch the next 10 feed items
      error => {
        //console.log('_loadMore 3 error')
        //console.log(error);
      }
    );
  }  
}

export default createPaginationContainer(
  TodoList,
  {
    viewer: graphql`
      fragment TodoList_viewer on User
      @argumentDefinitions(
        count: {type: "Int", defaultValue: 10}
        cursor: {type: "String"}
      ) {
        todos(
          first: $count
          after: $cursor
        ) @connection(key: "TodoList_todos") {
          edges {
            node {
              id
              complete
              ...Todo_todo
            }
          }
        }
        id
        totalCount
        completedCount
        ...Todo_viewer        
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.viewer && props.viewer.todos;
    },
    // This is also the default implementation of `getFragmentVariables` if it isn't provided.
    getFragmentVariables(prevVars, totalCount) {
      //console.log('getFragmentVariables')
      //console.log(prevVars);
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
//    getVariables(props, param1, fragmentVariables) {
      //const {count, cursor} = param1

      console.log('getVariables')
      console.log(props);
      console.log(fragmentVariables);
      console.log(props.viewer.todos.pageInfo.endCursor);
      //console.log(param1);
      console.log(cursor);
      return {
        count,
        cursor,
//        cursor: props.viewer.todos.pageInfo.endCursor,
        //orderBy: fragmentVariables.orderBy,
        // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
//        userID: fragmentVariables.userID,
        userID: props.viewer.id,
      };
    },
    query: graphql`
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query TodoListPaginationQuery(
        $count: Int!
        $cursor: String
        $userID: ID!
      ) {
        viewer: node(id: $userID) {
          ...TodoList_viewer @arguments(count: $count, cursor: $cursor )
        }
      }
    `
  }
);

//      # Pagination query to be fetched upon calling `loadMore`.
