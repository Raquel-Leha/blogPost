import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../graphql/posts";
import { CommentsList } from "../components/comments/CommentsList";
import { CommentForm } from "../components/comments/CommentForm";
import "./PostDetails.css";

export function PostDetails() {
  const params = useParams();
  //Ahora podemos ver los parametros de la url
  console.log(params);
  const { data, loading, error } = useQuery(GET_POST, {
    variables: {
      id: params.id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data, error, loading);

  return (
    <div className="main-container">
      <Link to="/posts">
        <button className="back-button">Volver</button>
      </Link>
      <div className="container-details">
        <div className="sub-container-img">
          <img alt="cook" src={data.post.image}></img>
        </div>
        <div className="container-title">
          <h1 className="text-2xl">{data.post.title}</h1>
        </div>

        <div className="container-text">
          <p>{data.post.body}</p>
        </div>
      </div>

      <CommentForm />
      <CommentsList comments={data.post.comments} />
    </div>
  );
}
