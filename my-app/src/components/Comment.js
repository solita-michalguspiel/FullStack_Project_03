import React from "react";
import "./CommentItem.css";
import { FaTrash, FaHeart } from "react-icons/fa";
import { Button } from "react-bootstrap";
import IconButton from "./IconButton";

const Comment = ({
  id,
  author,
  body,
  created_at,
  edited_at,
  likes,
  handleCommentRemoved,
  handleLikeGiven,
}) => {
  const createdDate = new Date(created_at).toLocaleString();
  const editedDate = new Date(edited_at).toLocaleString();

  const handleRemoveClick = () => {
    handleCommentRemoved(id);
  };
  const handleAddLike = () => {
    handleLikeGiven(id);
  };

  return (
    <div className="comment-item">
      <div className="header-section">
        <div>
          <IconButton
            icon={<FaTrash size={30} />}
            onClick={() => handleRemoveClick()}
          />
          <p></p>
        </div>
        <p className="comment-author"> {author} </p>
        <div>
          <IconButton
            icon={<FaHeart size={30} />}
            onClick={() => handleAddLike()}
          />
          <p>{likes}</p>
        </div>
      </div>
      <p className="comment-body">{body}</p>
      <p className="comment-date">
        {edited_at ? `Edited on ${editedDate}}]` : `Posted on ${createdDate}`}
      </p>
    </div>
  );
};

export default Comment;
