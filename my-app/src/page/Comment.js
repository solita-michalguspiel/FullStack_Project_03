import { useParams } from "react-router-dom";
import FakeNewsArticle from "../components/FakeNewsArticle";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../util/Constants";
import CommentItem from "../components/Comment";
import AddCommentForm from "../components/AddComment";

const Comment = () => {
  const { id } = useParams(); // get the id parameter from the URL
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);

  const handleCommentAdded = (comment) => {
    setComments([...comments, comment]);
  };

  useEffect(() => {
    console.log("UseEffect called");
    axios.get(API_URL + `/api/${id}`).then((response) => {
      console.log(response);
      setArticle(response.data);
    });
  }, [id]);

  useEffect(() => {
    console.log("UseEffect called");
    axios.get(API_URL + `/api/getcomments/${id}`).then((response) => {
      console.log(response);
      setComments(response.data);
    });
  }, [id]);

  const handleCommentRemoved = (commentId) => {
    axios.delete(API_URL + `/api/deletecomment/${commentId}`).then((response) => {
      console.log(response);
      setComments(comments.filter((comment) => comment._id !== commentId));
    });
  };

  const handleLikeGiven = (commentId) => {
    const updatedComments = comments.map((comment) => {
        if (comment._id === commentId) {
          return {
            ...comment,
            likes: comment.likes + 1
          };
        } else {
          return comment;
        }
      });
      setComments(updatedComments);
    axios.put(API_URL + `/api/updateComment/${commentId}`).then((response) => {
      console.log(response);
    });
  };

  if (Object.keys(article).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <FakeNewsArticle
        id={article._id}
        title={article.title}
        author={article.author}
        body={article.body}
        tags={article.tags}
        created_at={article.created_at}
        edited_at={article.edited_at}
        isPage={true}
      />
      {comments.map((item) => (
        <div key={item._id}>
          <CommentItem
            id={item._id}
            author={item.author}
            body={item.body}
            created_at={item.created_at}
            edited_at={item.edited_at}
            likes={item.likes}
            handleCommentRemoved={handleCommentRemoved}
            handleLikeGiven={handleLikeGiven}
          />
        </div>
      ))}
      <AddCommentForm
        articleId={article._id}
        onCommentAdded={handleCommentAdded}
      />{" "}
    </div>
  );
};

export default Comment;
