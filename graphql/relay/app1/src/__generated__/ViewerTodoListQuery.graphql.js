/**
 * @flow
 * @relayHash e752f082e870f0b85d4a2e6cb500de1b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ViewerTodoListQueryResponse = {|
  +viewer: ?{|
    +id: string;
  |};
|};
*/


/*
query ViewerTodoListQuery {
  viewer {
    id
    ...TodoList_userTodoData
  }
}

fragment TodoList_userTodoData on User {
  todos(first: 2147483647) {
    edges {
      node {
        id
        ...Todo_todo
      }
    }
  }
  id
  totalCount
  completedCount
}

fragment Todo_todo on Todo {
  complete
  text
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewerTodoListQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "FragmentSpread",
            "name": "TodoList_userTodoData",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "ViewerTodoListQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "ViewerTodoListQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 2147483647,
                "type": "Int"
              }
            ],
            "concreteType": "TodoConnection",
            "name": "todos",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "TodoEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Todo",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "complete",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "text",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "todos{\"first\":2147483647}"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "totalCount",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "completedCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query ViewerTodoListQuery {\n  viewer {\n    id\n    ...TodoList_userTodoData\n  }\n}\n\nfragment TodoList_userTodoData on User {\n  todos(first: 2147483647) {\n    edges {\n      node {\n        id\n        ...Todo_todo\n      }\n    }\n  }\n  id\n  totalCount\n  completedCount\n}\n\nfragment Todo_todo on Todo {\n  complete\n  text\n}\n"
};

module.exports = batch;
