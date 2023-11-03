import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST, GET_POSTS } from "../../graphql/posts";

export const PostForm = () => {
  const [post, setPost] = useState({
    image: "",
    title: "",
    body: "",
  });

  const [createPost, { loading, error }] = useMutation(CREATE_POST, {
    refetchQueries: [
      {
        query: GET_POSTS,
      },
      "GetPosts",
    ],
  });

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({
      variables: {
        image: post.image,
        title: post.title,
        body: post.body,
      },
    });
    e.target.reset();
    e.target.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="w-2/5">
      {error && <p>{error.message}</p>}
      <input 
      type="text"
      name="image" 
      placeholder="Agrega una imagen"
      onChange={handleChange}
      className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"

      />
      <input
        type="text"
        name="title"
        placeholder="Escribe un título para tu post"
        onChange={handleChange}
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"
      />
      <textarea
        name="body"
        placeholder="Escribe el cuerpo de tu post"
        onChange={handleChange}
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block w-full mb-3"
      ></textarea>
      <button
        disabled={!post.title || !post.body || loading }
        className="bg-blue-600 px-4 py-1 rounded-md text-lg mb-3 disabled:bg-blue-400"
      >
        Publicar Post
      </button>
    </form>
  );
};
