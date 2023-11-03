import { gql } from "@apollo/client"


export const CREATE_COMMENT = gql`
   mutation($comment: String, $postId: ID) {
    createComment(comment: $comment, postId: $postId) {
        comment
        post {
            _id
        }
    }
   }

`;

export const DELETE_COMMENT = gql`
  mutation($id: ID!) {
    deleteComment(_id: $id){
        _id
        comment
    }
  }
  
`;