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

export const postMessage = gql`
  mutation {
    postMessage(user: "Dennis", content: "Hello everyone") {
      id
      user
      content
    }
  }
`;
