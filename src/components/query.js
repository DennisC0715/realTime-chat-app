import { gql } from "@apollo/client";

export const getMessage = gql`
  query {
    messages {
      id
      user
      content
    }
  }
`;

export const POST_Message = gql`
  mutation ($user: String!, $content: String!) {
    postMessage(user: $user, content: $content) {
      id
      user
      content
    }
  }
`;

export const messageSubscription = gql`
  subscription {
    messages {
      id
      user
      content
    }
  }
`;
