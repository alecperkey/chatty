import gql from 'graphql-tag';

import MESSAGE_FRAGMENT from './message.fragment';

// get the user and all user's groups
export const USER_QUERY = gql`
  query user($id: Int) {
    user(id: $id) {
      id
      avatar
      badgeCount
      email
      firstName
      lastName
      registrationId
      username
      groups {
        id
        name
        icon
        unreadCount
        messages(messageConnection: { first: 1 }) { # we don't need to use variables
          edges {
            cursor
            node {
              ... MessageFragment
            }
          }
        }
      }
      friends {
        id
        username
      }
      tweets {
        id
        text
        createdAt
        author {
          id
          username
          firstName
          lastName
          avatar
        }
      }
    }
  }
  ${MESSAGE_FRAGMENT}
`;

export default USER_QUERY;
