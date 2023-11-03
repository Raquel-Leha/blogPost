import { useMutation } from "@apollo/client";
import { DELETE_COMMENT } from "../../graphql/comment";
import "./CommentCard.css"


/*
      <button
        
        onClick={() => {
          deleteComment({
            variables: {
              id: comment._id,
            }
          });
        }}
      >
      eliminar
      </button>
*/


export function CommentCard({ comment }) {

  const [deleteComment] = useMutation(DELETE_COMMENT, {
    refetchQueries: ["getPost"],
  });
  return (
    <div className="comment-div">
      <p className="text-sm">{comment.comment}</p>

    </div>
  );
}
