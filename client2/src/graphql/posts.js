import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  
    query getPosts {
      posts {
        _id
        image
        title
        body
      }
    }
  
`;


export const GET_POST = gql`
  query getPost($id: ID!) {
    post(_id: $id) {
      _id
      image
      title
      body
      comments {
        _id
        comment
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation ($image: String, $title: String, $body: String) {
    createPost(image: $image, title: $title, body: $body) {
      _id
      image
      title
      body
    }
  }
`;
