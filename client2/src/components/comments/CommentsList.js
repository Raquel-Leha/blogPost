import { CommentCard } from './CommentCard'

export function CommentsList  ({comments})  {
  return (
    <div>
      {comments.map((comment) => (
        <CommentCard comment={comment} key={comment._id}/>
      ))}
    </div>
  )
}

