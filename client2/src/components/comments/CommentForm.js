
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../../graphql/comment"
import { useParams } from "react-router-dom"
import "./CommentForm.css"


export function CommentForm  ()  {

  const [createComment] = useMutation(CREATE_COMMENT, {
    refetchQueries: ['getPost']
  });
  const params = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();
     await createComment({
      variables: {
        comment: e.target.comment.value,
        postId: params.id,
      }
    })
    e.target.reset()
    e.target.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="comment" 
      className="div-input"
      placeholder="Escribe un comentario"
      />
      <button
      className="div-button"
      >Añadir comentario</button>
    </form>
  )
}

